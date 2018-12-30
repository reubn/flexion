import puppeteer from 'puppeteer'

const browser = puppeteer.launch()

const normaliseElement = element => {
  const array = element.textContent.replace(' o ', ', ').split(', ').map(a => a.trim())
  return array.length === 1 ? array[0] : array
}

export default async infinitive => {
  const page = await (await browser).newPage()
  await page.goto(`https://www.wordreference.com/conj/EsVerbs.aspx?v=${infinitive}`)
  await page.evaluate(element => {
    if(element) element.parentNode.removeChild(element)
  }, await page.$(`[style^='background-color:#']`))

  return {
    conjugation: {
      indicative: {
        present: {
          singular: {
            first: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(2) > tbody > tr:nth-child(2) > td')),
            second: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(2) > tbody > tr:nth-child(3) > td')),
            third: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(2) > tbody > tr:nth-child(4) > td'))
          },
          plural: {
            first: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(2) > tbody > tr:nth-child(5) > td')),
            second: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(2) > tbody > tr:nth-child(6) > td')),
            third: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(2) > tbody > tr:nth-child(7) > td'))
          }
        },
        conditional: {
          singular: {
            first: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(6) > tbody > tr:nth-child(2) > td')),
            second: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(6) > tbody > tr:nth-child(3) > td')),
            third: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(6) > tbody > tr:nth-child(4) > td'))
          },
          plural: {
            first: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(6) > tbody > tr:nth-child(5) > td')),
            second: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(6) > tbody > tr:nth-child(6) > td')),
            third: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(6) > tbody > tr:nth-child(7) > td'))
          }
        },
        future: {
          singular: {
            first: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(5) > tbody > tr:nth-child(2) > td')),
            second: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(5) > tbody > tr:nth-child(3) > td')),
            third: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(5) > tbody > tr:nth-child(4) > td'))
          },
          plural: {
            first: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(5) > tbody > tr:nth-child(5) > td')),
            second: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(5) > tbody > tr:nth-child(6) > td')),
            third: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(5) > tbody > tr:nth-child(7) > td'))
          }
        },
        imperfect: {
          singular: {
            first: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(3) > tbody > tr:nth-child(2) > td')),
            second: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(3) > tbody > tr:nth-child(3) > td')),
            third: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(3) > tbody > tr:nth-child(4) > td'))
          },
          plural: {
            first: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(3) > tbody > tr:nth-child(5) > td')),
            second: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(3) > tbody > tr:nth-child(6) > td')),
            third: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(3) > tbody > tr:nth-child(7) > td'))
          }
        },
        preterite: {
          singular: {
            first: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(4) > tbody > tr:nth-child(2) > td')),
            second: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(4) > tbody > tr:nth-child(3) > td')),
            third: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(4) > tbody > tr:nth-child(4) > td'))
          },
          plural: {
            first: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(4) > tbody > tr:nth-child(5) > td')),
            second: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(4) > tbody > tr:nth-child(6) > td')),
            third: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(1) > table:nth-child(4) > tbody > tr:nth-child(7) > td'))
          }
        }
      },
      subjunctive: {
        present: {
          singular: {
            first: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(3) > table:nth-child(2) > tbody > tr:nth-child(2) > td')),
            second: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(3) > table:nth-child(2) > tbody > tr:nth-child(3) > td')),
            third: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(3) > table:nth-child(2) > tbody > tr:nth-child(4) > td'))
          },
          plural: {
            first: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(3) > table:nth-child(2) > tbody > tr:nth-child(5) > td')),
            second: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(3) > table:nth-child(2) > tbody > tr:nth-child(6) > td')),
            third: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(3) > table:nth-child(2) > tbody > tr:nth-child(7) > td'))
          }
        },
        future: {
          singular: {
            first: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(3) > table:nth-child(4) > tbody > tr:nth-child(2) > td')),
            second: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(3) > table:nth-child(4) > tbody > tr:nth-child(3) > td')),
            third: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(3) > table:nth-child(4) > tbody > tr:nth-child(4) > td'))
          },
          plural: {
            first: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(3) > table:nth-child(4) > tbody > tr:nth-child(5) > td')),
            second: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(3) > table:nth-child(4) > tbody > tr:nth-child(6) > td')),
            third: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(3) > table:nth-child(4) > tbody > tr:nth-child(7) > td'))
          }
        },
        imperfect: {
          singular: {
            first: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(3) > table:nth-child(3) > tbody > tr:nth-child(2) > td')),
            second: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(3) > table:nth-child(3) > tbody > tr:nth-child(3) > td')),
            third: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(3) > table:nth-child(3) > tbody > tr:nth-child(4) > td'))
          },
          plural: {
            first: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(3) > table:nth-child(3) > tbody > tr:nth-child(5) > td')),
            second: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(3) > table:nth-child(3) > tbody > tr:nth-child(6) > td')),
            third: await page.evaluate(normaliseElement, await page.$('.aa:nth-of-type(3) > table:nth-child(3) > tbody > tr:nth-child(7) > td'))
          }
        }
      }
    }
  }
}
