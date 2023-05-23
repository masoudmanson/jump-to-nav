import React, { useRef, useState } from "react";
import { InputSlider, NavigationJumpTo } from "@czi-sds/components";

import "./index.css";
import { TabPanelProps } from "@mui/base";
import { Box } from "@mui/material";

interface TabPanelPropsExtra extends TabPanelProps {
  index: number;
  sdsDemoHeight: number;
}

const TabPanel = React.forwardRef<HTMLDivElement, TabPanelPropsExtra>(
  (props, ref) => {
    const { children, sdsDemoHeight, ...other } = props;

    return (
      <div
        ref={ref}
        role="tabpanel"
        style={{
          alignItems: "center",
          backgroundColor: "#f4f4f4",
          color: "black",
          display: "flex",
          fontFamily: "Open Sans, sans-serif",
          fontSize: "36px",
          fontWeight: 100,
          justifyContent: "center",
          margin: "0px 22px 22px 6px",
          minHeight: `${sdsDemoHeight}vh`,
          textAlign: "center",
        }}
        {...other}
      >
        <Box sx={{ p: 3 }}>
          {children}
          <p style={{ fontSize: 14, margin: "5px 0 0 0" }}>
            height: {sdsDemoHeight} vh
          </p>
        </Box>
      </div>
    );
  },
);

const App = () => {
  const [navPanelHeight, setNavPanelHeight] = useState(100);
  const sectionRef0 = useRef(null);
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);
  const sectionRef4 = useRef(null);

  return (
    <div className="app">
      <h1 className="title">Jump To Navigation</h1>
      <p className="description">
        This demo is to test the NavigationJumpTo component in an environment
        other that the storybook.
      </p>

      <Box>
        <Box
          sx={{
            fontFamily: "Open Sans, sans-serif",
            margin: "0 0 30px 6px",
            width: 250,
          }}
        >
          <p id="nav-item-height-slider" style={{ marginBottom: "5px" }}>
            Section panel height:
          </p>
          <InputSlider
            aria-labelledby="nav-item-height-slider"
            min={20}
            max={120}
            step={10}
            onChange={(_, value) => {
              setNavPanelHeight(value as number);
            }}
            defaultValue={100}
            marks={[
              { label: "20", value: 20 },
              { label: "40", value: 40 },
              { label: "60", value: 60 },
              { label: "80", value: 80 },
              { label: "100", value: 100 },
              { label: "120", value: 120 },
            ]}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            width: "100%",
          }}
        >
          <Box sx={{ width: 150 }}>
            <NavigationJumpTo
              items={[
                { elementRef: sectionRef0, title: "Section 1" },
                { elementRef: sectionRef1, title: "Section 2" },
                { elementRef: sectionRef2, title: "Section 3" },
                { elementRef: sectionRef3, title: "Section 4" },
                { elementRef: sectionRef4, title: "Section 5" },
              ]}
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <TabPanel
              id="panel-01"
              index={0}
              ref={sectionRef0}
              sdsDemoHeight={navPanelHeight}
            >
              Section #1
            </TabPanel>
            <TabPanel
              id="panel-02"
              index={1}
              ref={sectionRef1}
              sdsDemoHeight={navPanelHeight}
            >
              Section #2
            </TabPanel>
            <TabPanel
              id="panel-03"
              index={2}
              ref={sectionRef2}
              sdsDemoHeight={navPanelHeight}
            >
              Section #3
            </TabPanel>
            <TabPanel
              id="panel-04"
              index={3}
              ref={sectionRef3}
              sdsDemoHeight={navPanelHeight}
            >
              Section #4
            </TabPanel>
            <TabPanel
              id="panel-05"
              index={4}
              ref={sectionRef4}
              sdsDemoHeight={navPanelHeight}
            >
              Section #5
            </TabPanel>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

App.displayName = "NavigationJumpToDemo";

export default App;
