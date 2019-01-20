import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Card from "@material-ui/core/Card";
import VectorCameraStream from "./components/camera"
import VectorBatteryStatus from "./components/battery"
import VectorMove from "./components/move"

// Main Page
class App extends React.Component {
    render() {
        return (
            <div>
                <CssBaseline/>

                <Card
                    style={{
                        maxWidth: 1000,
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}>
                    <VectorBatteryStatus/>
                    <VectorMove/>
                    <VectorCameraStream/>
                </Card>
            </div>
        )
    }
}

export default App;
