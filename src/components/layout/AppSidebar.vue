<template>
  <aside
    :class="[
      'fixed top-0 left-0 z-99999 flex h-screen flex-col border-r border-gray-200 bg-white px-4 py-6 text-gray-900 transition-transform duration-300 ease-in-out dark:border-gray-800 dark:bg-gray-900',
      isMobileOpen ? 'translate-x-0 w-[240px]' : '-translate-x-full w-[240px]',
      'lg:w-[240px] lg:translate-x-0 lg:top-4 lg:left-4 lg:h-[calc(100vh-2rem)] lg:rounded-3xl lg:border lg:border-gray-200 lg:bg-white/90 lg:px-5 lg:py-7 lg:shadow-theme-lg lg:backdrop-blur supports-[backdrop-filter]:lg:bg-white/75 dark:lg:border-white/10 dark:lg:bg-gray-900/85',
    ]"
  >
    <div class="flex justify-center pb-8">
      <router-link to="/">
        <img
          v-if="showLabels"
          class="dark:hidden"
          src="/images/logo/logo.svg"
          alt="Logo"
          width="150"
          height="40"
        />
        <img
          v-if="showLabels"
          class="hidden dark:block"
          src="/images/logo/logo-dark.svg"
          alt="Logo"
          width="150"
          height="40"
        />
        <img
          v-else
          src="/images/logo/logo-icon.svg"
          alt="Logo"
          width="32"
          height="32"
        />
      </router-link>
    </div>
    <div
      class="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar"
    >
      <nav class="mb-6">
        <div class="flex flex-col gap-4">
          <div v-for="(menuGroup, groupIndex) in menuGroups" :key="groupIndex">
            <h2
              class="mb-4 text-xs uppercase leading-[20px] text-gray-400"
              v-if="showLabels"
            >
              {{ menuGroup.title }}
            </h2>
            <ul class="flex flex-col gap-4">
              <li v-for="(item, index) in menuGroup.items" :key="item.name">
                <button
                  v-if="item.subItems"
                  @click="toggleSubmenu(groupIndex, index)"
                  :class="[
                    'menu-item group w-full',
                    {
                      'menu-item-active': isSubmenuOpen(groupIndex, index),
                      'menu-item-inactive': !isSubmenuOpen(groupIndex, index),
                    },
                  ]"
                >
                  <span
                    :class="[
                      isSubmenuOpen(groupIndex, index)
                        ? 'menu-item-icon-active'
                        : 'menu-item-icon-inactive',
                    ]"
                  >
                    <component :is="item.icon" />
                  </span>
                  <span v-if="showLabels" class="menu-item-text">{{ item.name }}</span>
                  <ChevronDownIcon
                    v-if="showLabels"
                    :class="[
                      'ml-auto w-5 h-5 transition-transform duration-200',
                      {
                        'rotate-180 text-brand-500': isSubmenuOpen(
                          groupIndex,
                          index
                        ),
                      },
                    ]"
                  />
                </button>
                
                <router-link
                  v-else-if="item.path"
                  :to="item.path"
                  @click="closeSubmenus"
                  :class="[
                    'menu-item group',
                    {
                      'menu-item-active': isActive(item.path),
                      'menu-item-inactive': !isActive(item.path),
                    },
                  ]"
                >
                  <span
                    :class="[
                      isActive(item.path)
                        ? 'menu-item-icon-active'
                        : 'menu-item-icon-inactive',
                    ]"
                  >
                    <component :is="item.icon" />
                  </span>
                  <span v-if="showLabels" class="menu-item-text">{{ item.name }}</span>
                </router-link>
                <transition
                  @enter="startTransition"
                  @after-enter="endTransition"
                  @before-leave="startTransition"
                  @after-leave="endTransition"
                >
                  <div
                    v-show="
                      isSubmenuOpen(groupIndex, index) && showLabels
                    "
                  >
                    <ul class="mt-2 space-y-1 ml-9">
                      <li v-for="subItem in item.subItems" :key="subItem.name">
                        <router-link
                          :to="subItem.path"
                          @click="closeSubmenus"
                          :class="[
                            'menu-dropdown-item',
                            {
                              'menu-dropdown-item-active': isActive(
                                subItem.path
                              ),
                              'menu-dropdown-item-inactive': !isActive(
                                subItem.path
                              ),
                            },
                          ]"
                        >
                          {{ subItem.name }}
                          <span class="flex items-center gap-1 ml-auto">
                            <span
                              v-if="subItem.new"
                              :class="[
                                'menu-dropdown-badge',
                                {
                                  'menu-dropdown-badge-active': isActive(
                                    subItem.path
                                  ),
                                  'menu-dropdown-badge-inactive': !isActive(
                                    subItem.path
                                  ),
                                },
                              ]"
                            >
                              new
                            </span>
                            <span
                              v-if="subItem.pro"
                              :class="[
                                'menu-dropdown-badge',
                                {
                                  'menu-dropdown-badge-active': isActive(
                                    subItem.path
                                  ),
                                  'menu-dropdown-badge-inactive': !isActive(
                                    subItem.path
                                  ),
                                },
                              ]"
                            >
                              pro
                            </span>
                          </span>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </transition>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed, watch, type Component } from "vue";
import { useRoute } from "vue-router";

import {
  GridIcon,
  CalenderIcon,
  UserCircleIcon,
  DocsIcon,
  ChevronDownIcon,
  TableIcon,
  ListIcon,
} from "../../icons";
import { useSidebar } from "@/composables/useSidebar";
 

const route = useRoute();

const { isMobileOpen, openSubmenu, isMobile } = useSidebar();
const showLabels = computed(() => !isMobile.value || isMobileOpen.value);

type SubItem = { name: string; path: string; pro?: boolean; new?: boolean }
type MenuItem = { name: string; icon: Component; path?: string; subItems?: SubItem[] }
type MenuGroup = { title: string; items: MenuItem[] }

const menuGroups: MenuGroup[] = [
  {
    title: "Menu",
    items: [
      {
        icon: GridIcon,
        name: "Dashboard",
        subItems: [{ name: "Ecommerce", path: "/", pro: false }],
      },
      {
        icon: DocsIcon,
        name: "Noticias",
        path: "/news",
      },
      {
        icon: CalenderIcon,
        name: "Calendar",
        path: "/calendar",
      },
      {
        icon: UserCircleIcon,
        name: "User Profile",
        path: "/profile",
      },

      {
        name: "Forms",
        icon: ListIcon,
        subItems: [
          { name: "Form Elements", path: "/form-elements", pro: false },
        ],
      },
      {
        name: "Tables",
        icon: TableIcon,
        subItems: [{ name: "Basic Tables", path: "/basic-tables", pro: false }],
      },
    ],
  },
];

const isActive = (path: string) => route.path === path;

const toggleSubmenu = (groupIndex: number, itemIndex: number) => {
  const key = `${groupIndex}-${itemIndex}`;
  openSubmenu.value = openSubmenu.value === key ? null : key;
};

const closeSubmenus = () => {
  openSubmenu.value = null;
};

watch(
  () => route.fullPath,
  () => {
    openSubmenu.value = null;
  }
);

 

const isAnySubmenuRouteActive = computed(() => {
  return menuGroups.some((group) =>
    group.items.some(
      (item) =>
        item.subItems && item.subItems.some((subItem) => isActive(subItem.path))
    )
  );
});

const isSubmenuOpen = (groupIndex: number, itemIndex: number) => {
  const key = `${groupIndex}-${itemIndex}`;
  return (
    openSubmenu.value === key ||
    (isAnySubmenuRouteActive.value &&
      menuGroups[groupIndex].items[itemIndex].subItems?.some((subItem) =>
        isActive(subItem.path)
      ))
  );
};

const startTransition = (el: Element) => {
  const e = el as HTMLElement
  e.style.height = "auto";
  const height = e.scrollHeight;
  e.style.height = "0px";
  void e.offsetHeight; // force reflow
  e.style.height = height + "px";
};

const endTransition = (el: Element) => {
  const e = el as HTMLElement
  e.style.height = "";
};
</script>
