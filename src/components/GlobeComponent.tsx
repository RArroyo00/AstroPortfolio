import { onMount } from "solid-js";
import * as d3 from "d3";
import worldData from "../data/world.json";

const GlobeComponent = () => {
  let mapContainer: HTMLDivElement | undefined;

  // Visited countries
  const visitedCountries = [
    "Argentina",
    "Belgium",
    "Bolivia",
    "Brazil",
    "Canada",
    "Colombia",
    "England",
    "France",
    "Germany",
    "Ireland",
    "Italy",
    "Mexico",
    "Netherlands",
    "Peru",
    "Portugal",
    "Spain",
    "Switzerland",
    "Turkey",
    "USA",
    "Uruguay",
    "Vatican City"
  ];

  // Globe colors based on your palette
  const COLORS = {
    ocean: "var(--color-primary)",           // globe background
    countryDefault: "#d8d9d1",               // medium gray for unvisited countries
    countryVisited: "var(--color-secondary)",// visited countries
    stroke: "var(--color-primary)"           // border color
  };

  onMount(() => {
    if (!mapContainer) return;

    const width = mapContainer.clientWidth;
    const height = 500;
    const sensitivity = 75;

    const projection = d3
      .geoOrthographic()
      .scale(250)
      .center([0, 0])
      .rotate([0, -30])
      .translate([width / 2, height / 2]);

    const pathGenerator = d3.geoPath().projection(projection);

    const svg = d3.select(mapContainer)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // Globe background (ocean)
    svg.append("circle")
      .attr("fill", COLORS.ocean)
      .attr("stroke", COLORS.stroke)
      .attr("stroke-width", 2)
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .attr("r", projection.scale());

    const map = svg.append("g");

    // Countries
    map.append("g")
      .attr("class", "countries")
      .selectAll("path")
      .data(worldData.features)
      .enter()
      .append("path")
      .attr("d", (d: any) => pathGenerator(d))
      .attr("fill", (d: any) =>
        visitedCountries.includes(d.properties.name)
          ? COLORS.countryVisited
          : COLORS.countryDefault
      )
      .style("stroke", COLORS.stroke)
      .style("stroke-width", 1.2)
      .style("opacity", 1);

    // Rotation animation
    d3.timer(() => {
      const rotate = projection.rotate();
      const k = sensitivity / projection.scale();
      projection.rotate([rotate[0] - 1 * k, rotate[1]]);
      svg.selectAll("path").attr("d", (d: any) => pathGenerator(d));
    }, 200);
  });

  return (
    <div class="flex flex-col justify-center items-center w-full h-full">
      <div class="w-full" ref={mapContainer}></div>
    </div>
  );
};

export default GlobeComponent;
