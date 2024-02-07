// This is a valid JSON-LD schema for myself
const schema: Record<string, string | Record<string, string>[]> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Robert Joseph Cox Jr.',
  givenName: 'Robert',
  familyName: 'Cox',
  gender: 'male',
  affiliation: 'EngagedMD',
  jobTitle: 'Engineering Manager',
  callSign: 'robert430404',
  url: 'https://www.studiorclv.com',
  identifier: [
    {
      '@context': 'https://schema.org',
      '@type': 'URL',
      name: 'Github',
      url: 'https://github.com/robert430404'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'URL',
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/robert430404/'
    }
  ],
  knowsAbout: [
    {
      '@context': 'https://schema.org',
      '@type': 'Language',
      name: 'TypeScript',
      url: 'https://www.typescriptlang.org'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Language',
      name: 'Node JS',
      url: 'https://nodejs.org'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Language',
      name: 'Python',
      url: 'https://www.python.org'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Language',
      name: 'Golang',
      url: 'https://go.dev'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Language',
      name: 'PHP',
      url: 'https://www.php.net'
    }
  ],
  knowsLanguage: [
    {
      '@context': 'https://schema.org',
      '@type': 'Language',
      name: 'English'
    }
  ]
}

export enum SchemaElementTypes {
  Simple,
  Array
}

export type SchemaElement = {
  type: SchemaElementTypes
  key: string
  value: string | SchemaElement[]
  isContext: boolean
}

const transformSimpleSchemaElement = (key: string, value: string): SchemaElement => {
  return {
    key,
    value,
    type: SchemaElementTypes.Simple,
    isContext: key.includes('@')
  }
}

const transofrmArraySchemaElement = (objects: Record<string, string>[]): SchemaElement[] => {
  const transformed: SchemaElement[] = []

  objects.forEach((object) => {
    for (const key in object) {
      const value = object[key]

      transformed.push(transformSimpleSchemaElement(key, value))
    }
  })

  return transformed
}

export const getIterableSchema = (): SchemaElement[] => {
  const transformed: SchemaElement[] = []

  for (const key in schema) {
    const value = schema[key]

    if (typeof value === 'string') {
      transformed.push(transformSimpleSchemaElement(key, value))
    }

    if (Array.isArray(value)) {
      const results = transofrmArraySchemaElement(value)

      transformed.push({
        key,
        value: results,
        type: SchemaElementTypes.Array,
        isContext: key.includes('@')
      })

      console.log(results)
    }
  }

  console.log(transformed)

  return transformed
}
