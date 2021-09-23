var APP_DATA = {
  "scenes": [
    {
      "id": "0-west-entrance",
      "name": "West Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0241480801167553,
          "pitch": 0.14342768896497127,
          "rotation": 6.283185307179586,
          "target": "1-visual-spine"
        },
        {
          "yaw": 3.115650273158364,
          "pitch": 0.06362368571873667,
          "rotation": 0,
          "target": "2-east-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-visual-spine",
      "name": "Visual Spine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.07093931096579098,
          "pitch": 0.16246480531523133,
          "rotation": 0,
          "target": "0-west-entrance"
        },
        {
          "yaw": 3.012627416540618,
          "pitch": 0.17031404093543756,
          "rotation": 0,
          "target": "2-east-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-east-entrance",
      "name": "East Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.03994914720259146,
          "pitch": 0.14323481178312747,
          "rotation": 0,
          "target": "1-visual-spine"
        },
        {
          "yaw": 0.011102436258708437,
          "pitch": 0.05324022370469628,
          "rotation": 0,
          "target": "0-west-entrance"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
