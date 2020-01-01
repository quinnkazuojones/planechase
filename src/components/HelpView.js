import React from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import { useTransition, animated, config, useSpring } from "react-spring";

const HelpView = () => {
  const location = useLocation();
  const { pathname } = location;

  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
    config: config.default
  });

  const animation = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    config: config.default
  });

  return (
    <animated.div style={animation} className="help-panel-container">
      <div className="help-panel">
        <h1>Help</h1>
        <div className="switch">
          <Link to="/help/overview">
            <h2 className={pathname === "/help/overview" ? "" : "faded"}>
              Overview
            </h2>
          </Link>
          <Link to="/help/controls">
            <h2 className={pathname === "/help/controls" ? "" : "faded"}>
              Controls
            </h2>
          </Link>
          <Link to="/help/creator">
            <h2 className={pathname === "/help/creator" ? "" : "faded"}>
              Creator
            </h2>
          </Link>
        </div>
        <div className="bordered">
          <div className="content">
            {transitions.map(({ item: location, props, key }) => (
              <animated.div key={key} style={props}>
                <Switch location={location}>
                  <Route path="/help/overview" component={Overview} />
                  <Route path="/help/controls" component={Controls} />
                  <Route path="/help/creator" component={Creator} />
                </Switch>
              </animated.div>
            ))}
          </div>
        </div>
      </div>
    </animated.div>
  );
};

const Overview = () => {
  return (
    <div className="overview-container">
      <h2>What is Planechase?</h2>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem.
      </p>
      <h2>Chaos</h2>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem.
      </p>
      <h2>Planeswalking</h2>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem.
      </p>
      <h2>Phenomena</h2>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem.
      </p>
    </div>
  );
};

const Controls = () => {
  return (
    <div className="controls-container">
      <div className="centered">
        <div className="left">
          <h2>Roll Planar Dice</h2>
          <h2>Switch Views</h2>
          <h2>Adjust Player Health</h2>
          <h2>Action</h2>
        </div>
        <div className="line">
          <div className="line-inner"></div>
        </div>
        <div className="right">
          <h2>[ENTER]</h2>
          <h2>[SPACE]</h2>
          <h2>[Player #] + [- or +]</h2>
          <h2>[ENTER]</h2>
        </div>
      </div>
    </div>
  );
};

const Creator = () => {
  return <div className="creator-container">Quinn</div>;
};

export default HelpView;
