import React from "react"

import { IInn, IData, IBank } from './types'

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

export default async function Inn({ params }: IInn) {
  const data = await getData(params.inn)

  if (data.suggestions.length === 0) { return (<ErrorPage />) }

  return (
    <div>
      {data.suggestions.map((item: IBank, index: number) => (
        <div key={index}>{item.value}</div>
      ))}
    </div>
  )
}