import {version} from '../package.json'
import {isObject} from 'sav-util'
import Vue from 'vue'
import App from './App.vue'

/**
 * Capitalize a string.
 */
export function ucfirst (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// #if IS_REMOVE
export function lcfirst (str) {
  return str.charAt(0).toLowerCase() + str.slice(1)
}
// #endif

export function log (...args) {
  console.log(...args)
}

export {version}
export {isObject}
export {App}
export {Vue}
