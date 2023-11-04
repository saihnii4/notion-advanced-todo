import React from "react"

interface Props {
  headers: string[]
  data: any[]
}

const represent = (data: any) => {
  switch (typeof data) {
    case "boolean":
      return <td>"Yes"</td>
    case "number":
    case "string":
      return <td>{data}</td>
    case "object":
      return (
        <td>
          <em>{JSON.stringify(data)}</em>
        </td>
      )
    case "undefined":
      return <td>null</td>
    case "function":
      return (
        <td>
          <button onClick={data}>Press me!</button>
        </td>
      )
    default:
      return <td>Unknown</td>
  }
}

// TODO:
export const Widget: React.FC<Props> = ({ headers, data }) => {
  return (
    <table className="bg-slate-700 text-slate-200">
      <thead className="bg-slate-600">
        <tr>
          {headers.map(header => (
            <th className="px-4">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(entry => (
          <tr>{entry.map(represent)}</tr>
        ))}
      </tbody>
    </table>
  )
}
