import React from "react"
import { Widget } from "../components/widget"

const Index = () => {
  return (
    <div>
      <div className="h-full w-full justify-center items-center flex flex-col">
        <h1 className="text-6xl font-bold">Advanced Notion To-Do Widgets</h1>
        <Widget headers={["testing", "testing"]} data={[["a", false]]} />
        {/* <table className="bg-slate-700 text-slate-200">
          <thead className="bg-slate-600">
            <tr>
              <th className="px-4">Testing</th>
              <th className="px-4">Testing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Testing</td>
              <td>Testing</td>
            </tr>
            <tr>
              <td>Testing</td>
              <td>Testing</td>
            </tr>
            <tr>
              <td>Testing</td>
              <td>Testing</td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </div>
  )
}

export default Index
