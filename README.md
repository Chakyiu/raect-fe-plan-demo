# Introduction

To create and choose plan by users' input.
[Demo Link](https://chakyiu.github.io/react-fe-plan-demo/index)

# Instruction

1. Clone the project and run `npm install` and `npm run start` under the root folder.
2. Run `npm run build` and pull all data in `./build` to static server.
3. Config home page under `./package.json` and run `npm run deploy`

# Unit test

0. Layout showcase

Empty Field: ![Demo_Img_1](demo/demo_img_0_0.png)
Error Input: ![Demo_Img_1](demo/demo_img_0_1.png) (When submit button is clicked during error input, it will have shaking animation to alert user.)
Correct Input: ![Demo_Img_1](demo/demo_img_0_2.png)
Plan Page: ![Demo_Img_1](demo/demo_img_0_3.png)

1. Acceptable and sample input format:

```json
{
  "plan": [
    {
      "name": "Standard Plan",
      "element": {
        "General": true,
        "Specialist": true,
        "Physiotherapy": false
      },
      "price": 0
    },
    {
      "name": "Premium Plan",
      "element": {
        "General": true,
        "Specialist": false
      },
      "price": 388
    }
  ]
}
```

Result: ![Demo_Img_1](demo/demo_img_1.png)

2. More than three plans inputed:

```json
{
  "plan": [
    {
      "name": "Standard Plan",
      "element": {
        "General": true,
        "Specialist": true,
        "Physiotherapy": false
      },
      "price": 0
    },
    {
      "name": "Premium Plan",
      "element": {
        "General": true,
        "Specialist": false
      },
      "price": 388
    },
    {
      "name": "Premium Plan",
      "element": {
        "General": true,
        "Specialist": false
      },
      "price": 388
    },
    {
      "name": "Premium Plan",
      "element": {
        "General": true,
        "Specialist": false
      },
      "price": 388
    },
    {
      "name": "Premium Plan",
      "element": {
        "General": true,
        "Specialist": false
      },
      "price": 388
    },
    {
      "name": "Premium Plan",
      "element": {
        "General": true,
        "Specialist": false
      },
      "price": 388
    }
  ]
}
```

Result: ![Demo_Img_2](demo/demo_img_2.png)

3. Empty JSON

```json
{}
```

Result: ![Demo_Img_2](demo/demo_img_3.png) 4. Empty Plan

```json
{
  "plan": []
}
```

Result: ![Demo_Img_2](demo/demo_img_4.png)

5. Plan with no "Name"

```json
{
  "plan": [
    {
      "element": {
        "General": true,
        "Specialist": true,
        "Physiotherapy": false
      },
      "price": 0
    }
  ]
}
```

Result: ![Demo_Img_2](demo/demo_img_5.png)

6. Plan with no "Element"

```json
{
  "plan": [
    {
      "name": "Standard Plan",
      "price": 0
    }
  ]
}
```

Result: ![Demo_Img_2](demo/demo_img_6.png)

7. Plan with no "Price"

```json
{
  "plan": [
    {
      "name": "Standard Plan",
      "element": {
        "General": true,
        "Specialist": true,
        "Physiotherapy": false
      }
    }
  ]
}
```

Result: ![Demo_Img_2](demo/demo_img_7.png)

8. Responsive layout

![Demo_Img_2](demo/demo_img_8_1.png)
![Demo_Img_2](demo/demo_img_8_2.png) (For too many plans inputed, the plan list can be scolled horizontally.)
