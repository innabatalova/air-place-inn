import React from "react"

import {
  IInn, IData, IBank, Address, Data,
  Metro, Management, Name, Opf, State
} from './types'

import ErrorPage from "@/components/ErrorPage/page";

import { token } from '@/accesses/token'
import { url } from "@/api/baseApi";

async function getData(inn: string): Promise<IData> {
  const query = "7707083893";

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Token " + token
    },
    body: JSON.stringify({ query: inn })
  }

  const res = await fetch(url, options)

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json()
}

async function sortValues(arr: IBank[]) {
  const arrValues: string[] = []

  const getString = (data: IBank | Address | Data |
    Metro | Management | Name | Opf | State): string[] =>
    data instanceof Object ? Object.values(data).flatMap(getString) : [data]

  arr.forEach((element: IBank) => {
    getString(element).filter(item => item != null).forEach((el: string) => {
      arrValues.push(el)
    })
  })

  return arrValues
}

export default async function Inn({ params }: IInn) {
  const data = await getData(params.inn)

  if (data.suggestions.length === 0) { return (<ErrorPage />) }

  const dataArray = await sortValues(data.suggestions)

  return (
    <div>
      {dataArray.map((item: string, index: number) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  )
}