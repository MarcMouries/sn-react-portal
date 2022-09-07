/* eslint-disable no-unused-vars */
import React, { useState, useCallback } from "react";
import {
	Icon,
	Tab,
	Tabs,
	InputGroup,
	Tree,
	Checkbox,
	ProgressBar,
	Button,
	Classes,
	AnchorButton,
	Position,
} from "@blueprintjs/core";

import { Tooltip2 } from "@blueprintjs/popover2";

import { useStoreon } from "storeon/react";

import Section from "./Section";
import "./LeftSidebar.css";
import mockdata from "./mock.js";

const { statsList, tasksData, treeData } = mockdata;

const Divider = ({ title }) => (
	<div className="custom-menu-divider">
		{title && (
			<h5>
				<span>{title}</span>
			</h5>
		)}
	</div>
);

const CheckboxItem = ({ title, number, progress, selected }) => (
	<div className="checkbox-wrapper">
		<Checkbox checked={selected} style={{ flexGrow: 2, maxWidth: "65%" }}>
			<small>{title}</small>
		</Checkbox>
		<div style={{ width: "80px", display: "flex", alignItems: "center" }}>
			<span>{number}</span>
			<ProgressBar
				animate={false}
				stripes={false}
				intent="primary"
				value={progress}
			/>
		</div>
	</div>
);

const ApprovalItem = ({ title }) => (
	<div className="checkbox-wrapper">
		<span>{title}</span>
		<div style={{ width: "80px", display: "flex", alignItems: "center" }}>
			<Button minimal={true} intent="success">
				<small>Approve</small>
			</Button>
		</div>
	</div>
);

const FirstPanel = () => {
	const [treeNodes] = useState(treeData);
	const [selectedTreeNode, setSelectedTreeNode] = useState({});

	// needed for high performance tree update
	const [, updateState] = useState();
	const forceUpdate = useCallback(() => updateState({}), []);

	const handleNodeExpand = (treeNode) => {
		treeNode.isExpanded = true;
		treeNode.icon = "folder-open";
		forceUpdate();
	};

	const handleNodeCollapse = (treeNode) => {
		treeNode.isExpanded = false;
		treeNode.icon = "folder-close";
		forceUpdate();
	};

	const handleNodeClick = (treeNode) => {
		console.log("Tree node clicked", treeNode);
		// deselect current
		selectedTreeNode.isSelected = false;
		// select clicked one
		treeNode.isSelected = true;
		// update current
		setSelectedTreeNode(treeNode);
	};

	return (
		<>
			<Section title="Search">
				<InputGroup
					leftIcon="search"
					round={true}
					placeholder="Search input"
				/>
			</Section>

			<Section title="Status" action="Add">
				<div className="tree-wrapper flat">
					<Tree contents={statsList} onNodeClick={handleNodeClick} />
				</div>
			</Section>

			<Divider title="cases" />

			<Section title="Open Cases" action="View All">
				<div className="tree-wrapper">
					<Tree
						contents={treeNodes}
						onNodeExpand={handleNodeExpand}
						onNodeCollapse={handleNodeCollapse}
						onNodeClick={handleNodeClick}
					/>
				</div>
			</Section>

			<Divider title="tasks" />

			<Section title="Assigned Tasks" action="View All">
				<div className="tree-wrapper flat">
					<Tree
						contents={tasksData}
						onNodeExpand={handleNodeExpand}
						onNodeCollapse={handleNodeCollapse}
						onNodeClick={handleNodeClick}
					/>
				</div>
			</Section>

			<Divider title="approvals" />
			<Section title="pending requests" action="View All">
				<ApprovalItem title="CSE0009832: Lorem ipsum bono" />
				<ApprovalItem title="TASK000981: Create memo binder" />
			</Section>
			<Divider />
			<Section title="Case Progress" action="Add Note">
				<p>Bureau</p>
				<CheckboxItem
					selected={true}
					title="CSE000762: Annual Reporting"
					number={27}
					progress={0.75}
				/>
				<CheckboxItem
					selected={true}
					title="CSE000739: APM Form collection process and org..."
					number={10}
					progress={0.2}
				/>

				<p>Corporate</p>
				<CheckboxItem
					selected={false}
					title="CSE000882: European committee"
					number={25}
					progress={0.85}
				/>
				<CheckboxItem
					selected={false}
					title="CSE000991: M&A analysis"
					number={8}
					progress={0.85}
				/>
			</Section>
			<Divider />
			<div className="sidebar-footer">
				<Button fill={true} icon="add">
					New Case
				</Button>
			</div>
		</>
	);
};

const SecondPanel = () => {
	return <Section title="Section title">stuff</Section>;
};

export default function LeftSidebar(props) {
	const [tab, setTab] = useState("first");
	const { dispatch, sidebar: { isCollapsed }, theme: { darkSide } } = useStoreon('theme', 'sidebar')
  
	const handleTabChange = tab => {
	  setTab(tab);
	};

	const handleSidebarToggle = () => {
		dispatch("sidebar/toggleCollapsed");
	};

	const classes = ["left-sidebar", "bp3-elevation-2"];
	if (darkSide) classes.push(Classes.DARK);

	return (
		<div className={classes.join(" ")}>
			<div className="sidebar-header ">
				<h2>workspace</h2>
				<Icon
					icon="menu-closed"
					className="sidebar-toggle-btn"
					onClick={handleSidebarToggle}
				/>
			</div>
			<div className="sidebar-scroll">
				<Tabs onChange={handleTabChange} selectedTabId={tab}>
					<Tab
						id="first"
						title="Active Items"
						panel={<FirstPanel />}
					/>
					<Tab id="second" title="History" panel={<SecondPanel />} />
				</Tabs>
			</div>
			<div className="left-sidebar-collapsed-controls">
				<Tooltip2
					content="Open Cases"
					position={Position.RIGHT}
					boundary="viewport"
				>
					<AnchorButton icon="diagram-tree" />
				</Tooltip2>
				<Tooltip2
					content="Open Tasks"
					position={Position.RIGHT}
					boundary="viewport"
				>
					<AnchorButton icon="annotation" />
				</Tooltip2>
				<Tooltip2
					content="Open Approvals"
					position={Position.RIGHT}
					boundary="viewport"
				>
					<AnchorButton icon="confirm" />
				</Tooltip2>
				<Tooltip2
					content="Open Progress"
					position={Position.RIGHT}
					boundary="viewport"
				>
					<AnchorButton icon="timeline-bar-chart" />
				</Tooltip2>
				<Tooltip2
					content="Open Documents"
					position={Position.RIGHT}
					boundary="viewport"
				>
					<AnchorButton icon="document" />
				</Tooltip2>
			</div>
		</div>
	);
}
