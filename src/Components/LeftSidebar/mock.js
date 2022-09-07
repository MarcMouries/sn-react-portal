import React from 'react'
import { Button, Tag, Icon, Tooltip, Position } from '@blueprintjs/core'

const data = {
  statsList: [
    {
      "label": "Past due tasks",
      "icon": "outdated",
      "id": 141246235,
      "secondaryLabel": (
        <Tag intent="danger">4</Tag>
      )
    },
    {
      "label": "Pending approvals",
      "icon": "confirm",
      "id": 146212359,
      "secondaryLabel": (
        <Tag intent="warning">2</Tag>
      )
    },
    {
      "label": "SLA Breached",
      "icon": "issue",
      "id": 14624357,
      "secondaryLabel": (
        <Tag intent="primary">0</Tag>
      )
    }
  ],
  "tasksData": [
    {
      "label": "TSK000363: Create PDF memo for annual meeting",
      "icon": "document",
      "id": 146235
    },
    {
      "label": "TSK000926: Archive APM forms",
      "icon": "document",
      "id": 1462359
    },
    {
      "label": "TSK000992: Collect PPF statistics from stakeholders",
      "icon": "document",
      "id": 1462357
    }
  ],
  "listData": [
    {
      "label": "Past due tasks",
      "icon": "outdated",
      "id": 141246235
    },
    {
      "label": "Pending approvals",
      "icon": "confirm",
      "id": 146212359
    },
    {
      "label": "SLA Breached",
      "icon": "issue",
      "id": 14624357
    }
  ],
  "treeData": [
    {
      "label": "CSE000762: Annual Reporting",
      "folder": true,
      "icon": "folder-close",
      "id": 51223362,
      "childNodes": [
        {
          "label": "item",
          "folder": false,
          "id": 85192372,
          "icon": "document",
        }
      ]
    },
    {
      "label": "CSE000739: APM Form collection process and org structure",
      "folder": true,
      "isExpanded": true,
      "icon": "folder-open",
      "id": 8123352,
      "childNodes": [
        {
          "label": "Tasks",
          "folder": true,
          "isExpanded": false,
          "icon": "folder-close",
          "id": 91929232,
          "secondaryLabel": (
            <Button minimal icon="add" />
          ),
          "childNodes": [
            {
              "label": "Collect signatures from stakeholders",
              "folder": false,
              "id": 8494158,
              "icon": "document",
            },
            {
              "label": "Collect org data from all departments",
              "folder": false,
              "icon": "document",
              "id": 719252,
              "secondaryLabel": (
                <Icon icon="error" intent="danger" />
              )
            },
            {
              "label": "Compile PDF doc",
              "folder": false,
              "icon": "document",
              "id": 195299,
              "secondaryLabel": (
                <Icon icon="small-tick" intent="success" />
              )
            },
            {
              "label": "Submit org structure for signatures",
              "folder": false,
              "id": 1953299,
              "icon": "document",
            }
          ]
        },
        {
          "label": "Approvals",
          "folder": true,
          "isExpanded": false,
          "icon": "folder-close",
          "id": 919422292,
          "childNodes": [
            {
              "label": "Alex Bono",
              "folder": false,
              "icon": "user",
              "id": 719234252,
              "secondaryLabel": (
                <Icon icon="confirm" intent="success" />
              )
            },
            {
              "label": "Niki Heily",
              "folder": false,
              "id": 19235299,
              "icon": "user",
            },
            {
              "label": "Antonio Moreno",
              "folder": false,
              "id": 19536299,
              "icon": "user",
            }
          ]
        },
        {
          "label": "Documents",
          "folder": true,
          "isExpanded": false,
          "icon": "folder-close",
          "id": 9194222292,
          "secondaryLabel": (
            <Tooltip content="Upload a new document" position={Position.BOTTOM}>
              <Button minimal icon="add" />
            </Tooltip>
          ),
          "childNodes": [
            {
              "label": "Org structure.pdf",
              "folder": false,
              "id": 7192334252,
              "icon": "document",
            },
            {
              "label": "PMK form 2018.docx",
              "folder": false,
              "id": 192355299,
              "icon": "document",
            }
          ]
        }
      ]
    },
    {
      "label": "CSE000991: M&A analysis",
      "folder": true,
      "icon": "folder-close",
      "id": 519252,
      "childNodes": [
        {
          "label": "List item",
          "folder": false,
          "id": 851972,
          "icon": "document",
        }]
    }
  ]
}

export default data