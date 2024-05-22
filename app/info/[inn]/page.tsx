import React from "react"

import { IData, IBank } from './types'

import { token } from '@/accesses/token'
import { url } from "@/api/baseApi";

async function getData(): Promise<IData> {
  const query = "7707083893";

  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Token " + token
    },
    body: JSON.stringify({ query: query })
  }

  const res = await fetch(url, options)

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()

}

export default async function Inn() {
  const data = await getData()

  return (
    <div>
      {data.suggestions.map((item: IBank, index: number) => (
        <div key={index}>{item.value}</div>
      ))}
    </div>
  )
}