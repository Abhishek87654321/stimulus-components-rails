import { Controller, Application } from "@hotwired/stimulus"
import AnimatedNumber from 'stimulus-animated-number'

const application = Application.start()
application.register('animated-number', AnimatedNumber)


// Connects to data-controller="animated-number"
export default class extends Controller {
  connect() {
    super.connect()
    console.log('Do what you want here.')
  }
}

