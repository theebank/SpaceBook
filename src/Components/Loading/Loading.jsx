import React from 'react'
import { CircularProgress } from '@mui/material'

const Loading = () => {
    return (
        <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "100vh", width: "100vw" }}>
          <CircularProgress />
          <span style={{ justifyContent: "center", position: "fixed", top: "55%" }}>Loading NASA Data...please wait</span>
        </div>
    )
}

export default Loading
