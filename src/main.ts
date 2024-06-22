import './style.css'
// import './output.css'
import * as process from './process'
import * as loadImages from './loadImages'

export const propertiesSelected: {
 selected : number | null 
} = {
  selected : null
}
export let color = "#5e89ae"
process.initalize()
loadImages.initalize()
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
