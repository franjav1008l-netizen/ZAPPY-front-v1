/**
 * Parsea texto markdown básico a HTML para mensajes del chat
 * Soporta:
 * - Texto en negrita (**texto**)
 * - Listas con asteriscos (*)
 * - Saltos de línea
 * - Empresas destacadas (**Empresa:**)
 */
export function parseMessageContent(text: string): string {
  if (!text) return ''

  // Dividir el texto en líneas
  const lines = text.split('\n').map(line => line.trim())
  const result: string[] = []
  let inList = false
  let currentParagraph: string[] = []

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const paragraphText = currentParagraph.join(' ')
      if (paragraphText.trim()) {
        // Procesar negritas dentro del párrafo
        const processed = paragraphText.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        result.push(`<p class="message-paragraph">${processed}</p>`)
      }
      currentParagraph = []
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    
    // Si la línea está vacía, cerrar párrafo y lista si están abiertos
    if (!line) {
      flushParagraph()
      if (inList) {
        result.push('</ul>')
        inList = false
      }
      continue
    }

    // Si la línea empieza con asterisco seguido de espacio (lista)
    if (line.match(/^\*\s+/)) {
      flushParagraph()
      if (!inList) {
        result.push('<ul class="message-list">')
        inList = true
      }
      // Remover el asterisco y procesar negritas
      const listItem = line.replace(/^\*\s+/, '').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      result.push(`<li class="message-list-item">${listItem}</li>`)
    } else {
      // Si estábamos en una lista, cerrarla
      if (inList) {
        result.push('</ul>')
        inList = false
      }
      
      // Si la línea es solo una empresa en negrita (ej: **Amazon:**), tratarla como párrafo separado
      if (line.match(/^\*\*[^*]+\*\*:?\s*$/)) {
        flushParagraph()
        const companyName = line.match(/\*\*([^*]+)\*\*/)?.[1] || ''
        result.push(`<p class="message-paragraph message-company"><strong>${companyName}</strong></p>`)
      } else {
        // Agregar línea al párrafo actual
        currentParagraph.push(line)
      }
    }
  }

  // Cerrar párrafo y lista si quedaron abiertos
  flushParagraph()
  if (inList) {
    result.push('</ul>')
  }

  return result.join('')
}

