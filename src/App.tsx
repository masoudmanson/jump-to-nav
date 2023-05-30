/* eslint-disable react/display-name */
import { NavigationJumpTo } from "@czi-sds/components";
import { TabPanelProps } from "@mui/base";
import { Box } from "@mui/material";
import React, { useRef } from "react";
import "./index.css";

const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(
  (props, ref) => {
    const { children, ...other } = props;

    return (
      <div
        ref={ref}
        role="tabpanel"
        style={{
          alignItems: "center",
          color: "black",
          display: "flex",
          fontFamily: "Open Sans, sans-serif",
          fontSize: "16px",
          fontWeight: 100,
          justifyContent: "center",
          margin: "0px 22px 22px 6px",
          padding: "0 15px 10px",
          textAlign: "left",
        }}
        {...other}
      >
        <Box sx={{ p: 3 }}>{children}</Box>
      </div>
    );
  }
);

const App = () => {
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
            display: "flex",
            flexDirection: "row-reverse",
            position: "relative",
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
              offsetTop={5}
            />
          </Box>
          <Box
            sx={{
              position: "relative",
              width: "100%",
            }}
          >
            <TabPanel id="nav-panel-1" ref={sectionRef0}>
              <h2 className="title">Section 1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam minus quaerat, at alias culpa perspiciatis eius illo
                accusamus molestiae dolorum inventore unde id quo minima cum
                aliquam quos asperiores temporibus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                odit, distinctio veniam eius ut porro dicta explicabo quisquam
                nisi aspernatur alias fugiat provident, at beatae saepe quod
                tenetur officia repudiandae.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci tempora rem placeat nulla commodi officiis quo harum
                fugit sunt cum soluta eos sed eligendi illo consequuntur
                architecto, ex temporibus fuga!
              </p>
            </TabPanel>
            <TabPanel id="nav-panel-2" ref={sectionRef1}>
              <h2 className="title">Section 2</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolore, iusto cumque consequuntur fugit distinctio sequi atque
                possimus amet dolor porro eius totam provident aliquid? Sequi
                facere esse itaque quos dolore.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                facilis molestias laudantium, facere ratione incidunt, corporis
                mollitia id voluptas autem iste hic nobis quos natus tenetur
                placeat? Quae, aliquam nostrum?
              </p>
            </TabPanel>
            <TabPanel id="nav-panel-3" ref={sectionRef2}>
              <h2 className="title">Section 3</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                omnis ducimus a aperiam quo harum nesciunt repudiandae, odit id
                rem tenetur vero impedit. Asperiores cum reiciendis aperiam
                consectetur eum? Unde!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita deserunt rerum soluta exercitationem ducimus totam,
                minus delectus quibusdam, perferendis sunt tempore excepturi
                perspiciatis! Numquam, facere omnis commodi autem perferendis
                odit?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio ullam nulla aliquid repudiandae, voluptatem fugit ad
                quae dolor quidem eius in sapiente, fugiat voluptas vero animi
                sint adipisci, quas facere.
              </p>
            </TabPanel>
            <TabPanel id="nav-panel-4" ref={sectionRef3}>
              <h2 className="title">Section 4</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                possimus voluptatibus ad officiis. Modi, voluptatibus quibusdam
                cumque rerum ad dolorum reiciendis nihil dolores saepe similique
                quod omnis, maxime illo quasi?
              </p>
            </TabPanel>
            <TabPanel id="nav-panel-5" ref={sectionRef4}>
              <h2 className="title">Section 5</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate consequuntur corporis nihil nostrum, iusto sequi
                dolorem! Quas libero, voluptatem adipisci quis soluta quidem
                fugiat, optio officiis asperiores tempora, dolorum iusto! Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
                maxime possimus aliquid non porro eius aspernatur consequatur
                nihil voluptatem ducimus quo, esse saepe. Excepturi, nostrum
                libero odio cumque consequatur reiciendis!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur corrupti deleniti totam architecto debitis blanditiis
                itaque beatae, est quo adipisci quaerat repellat alias quis
                animi asperiores magni corporis perspiciatis accusantium.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                officiis sed cum voluptatum quidem iure ipsam. Officia, libero
                voluptatum dolorum consequatur ratione facere necessitatibus
                molestiae delectus ducimus! Eaque, fugiat laborum!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam ad
                totam dolore officiis impedit exercitationem eaque tempora
                quasi, eos, nisi sunt illum tenetur temporibus distinctio
                obcaecati iste dolores, consequuntur nesciunt.
              </p>
            </TabPanel>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

App.displayName = "NavigationJumpToDemo";

export default App;
