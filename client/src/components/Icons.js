import React from "react";
// import { SvgIcon } from "@mui/material";
import { ReactComponent as DogIconSVG } from "../assets/icons/dog-icon.svg";
import { ReactComponent as CatIconSVG } from "../assets/icons/cat-icon.svg";
import { ReactComponent as RabbitIconSVG } from "../assets/icons/rabbit-icon.svg";

const DogIcon = (props) => <DogIconSVG width={32} height={32} />;

const CatIcon = (props) => <CatIconSVG width={32} height={32} />;

const RabbitIcon = (props) => <RabbitIconSVG width={32} height={32} />;

export { DogIcon, CatIcon, RabbitIcon };
