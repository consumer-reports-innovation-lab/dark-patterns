import React from 'react'
import _ from 'lodash'
import { domToReact } from 'html-react-parser'
import SharedComponents from '../SharedComponents'
import format from "date-fns/format"


export const formatDate = date => {
  let dateFormated = "";
  if (date) {
    dateFormated = format(new Date(date), "MMMM dd, yyyy");
  }
  return dateFormated;
}

export const objectToArray = object => {
  if (object) {
    return Object.entries(object).map(e =>
      Object.assign({}, e[1], { id: e[0] })
    );
  }
}

export const formatToPhone = number => {
  const input = number.replace(/\D/g, "").substring(0, 10); // First ten digits of input only
  const zip = input.substring(0, 3);
  const middle = input.substring(3, 6);
  const last = input.substring(6, 10);
  return `(${zip}) ${middle} - ${last}`;
}

export const formatMoney = moneyAmount => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

  return formatter.format(moneyAmount);
}

export function getParseOptions(props) {
  return ({
    replace: ({ attribs, name, children }) => {
      if (!attribs) return
      if (attribs.id === 'pageFooter' || attribs.id === 'pageHeader' || name === 'script' || name === 'head') return (<></>)
      if (name === 'html' || name === 'body') {
        return <>{domToReact(children, getParseOptions(props))}</>
      }

      if (attribs.id === 'pageContent') {
        return <>{domToReact(children, getParseOptions(props))}</>
      }

      if (name.includes('-')) {
        const component = _.upperFirst(_.camelCase(name))
        return React.createElement(SharedComponents[component], { ...attribs, props })
      }
    }
  })
}

export function getElementParseOptions() {
  return ({
    replace: ({ attribs, name }) => {
      if (!attribs) return;

      if (name.includes('-')) {
        const component = _.upperFirst(_.camelCase(name))
        // @TODO: Write logic to check if component isExists. If not - throw error
        return React.createElement(SharedComponents[component], attribs)
      }
    }
  })
}