---
layout: home
permalink: index.html

# Please update this with your repository name and title
repository-name: e18-6sp-3D-Model-Construction-for-a-target-class-using-XAI-Group16
title: 3D Model Construction for a target class using XAI
---

[comment]: # "This is the standard layout for the project, but you can clean this and use your own template"

# 3D Model Construction for a target class using XAI

---

## Team
-  e/18/354, K.K.D.R.Tharaka, [e18354@eng.pdn.ac.lk](mailto:name@email.com)
-  e/18/318, S.A.P.Sandunika, [e18318@eng.pdn.ac.lk](mailto:name@email.com)
-  e/18/022, D.I.Amarasinghe, [e18022@eng.pdn.ac.lk](mailto:name@email.com)

## Table of Contents
1. [Introduction](#introduction)
2. [Image Classification Model](#imageclassfication)
3. [SHAP (SHapley Additive exPlanations)](#shap)
4. [3D reconstruction using Point E](#pointe)
5. [Links](#links)

---

## Introduction

Our aim is to create a general 3d skeleton for a target object through a process which uses a model that understands  the unique and real features of the target object using XAI

## Image Classification Model
As the image classification model we're using MobileNet Image Classification With TensorFlow's Keras API.
MobileNet is a deep learning model architecture designed for efficient image classification on mobile and embedded devices. It was developed by Google and is widely used due to its small size and fast inference speed.

The MobileNet architecture employs depthwise separable convolutions, which significantly reduces the number of parameters and computations required compared to traditional convolutional neural networks (CNNs). This reduction allows MobileNet to achieve a good balance between accuracy and model size.

### Advantages 
- Efficient in terms of model size and computational complexity
- Has a small model size, making it easier to deploy on devices with limited storage capacity
- Enables faster inference times
- Achieves competitive accuracy levels
- Provides a strong foundation for transfer learning

## SHAP (SHapley Additive exPlanations)

SHAP (SHapley Additive exPlanations) is an advanced method for explaining the predictions of machine learning models. It is based on cooperative game theory and aims to assign an importance value to each input feature or variable in a model, indicating how much that feature contributes to the model's prediction for a particular instance.  It aids in understanding the factors driving the model's decisions, enhances interpretability, and enables trust in the model's outputs, making it valuable in real-world applications.


### Key features

- Can be applied to any black-box model (ex: MobileNet)
- Provides explanations at the individual instance level
- Offers a measure of global feature importance
- Interpretability and Trust
- Provides various visualization techniques to represent the explanations

## 3D reconstruction using Point E

Typical 3D reconstruction models takes a long time to reconstruct a 3D model. The state-of-the-art methods typically require multiple GPU-hours to produce a single sample.

Here we are using the Point.E method which is introduced with the research paper, "Point·E: A System for Generating 3D Point Clouds from Complex Prompts" by Alex Nichol, Heewoo Jun, Prafulla Dhariwal, Pamela Mishkin and Mark ChenIn. In this model, an alternative method for 3D object generation is used which produces 3D models in only 1-2 minutes on a single GPU.

Their method first generates a single synthetic view using a text-to-image diffusion model, and then produces a 3D point cloud using a second diffusion model which conditions on the generated image.

Comparing with state-of-the-art method this method falls short in terms of sample quality but faster in sampling. Since our application wants to sample thousands of images, speed of the sampling is required over the quality. So, the traid-off is accepted.

## Images Classification results
![WhatsApp Image 2023-06-13 at 10 10 37](https://github.com/cepdnaclk/e18-6sp-3D-Model-Construction-for-a-target-class-using-XAI-Group16/assets/73444543/47e81900-dd49-4ac6-a415-a1ab4a641761)

## SHAP output
![WhatsApp Image 2023-06-13 at 10 10 378](https://github.com/cepdnaclk/e18-6sp-3D-Model-Construction-for-a-target-class-using-XAI-Group16/assets/73444543/aea640c0-6149-4352-b73f-1d663b5e25ff)

## 3D reconstruction results
![Screenshot 2023-06-13 092518](https://github.com/cepdnaclk/e18-6sp-3D-Model-Construction-for-a-target-class-using-XAI-Group16/assets/99112218/4360defa-bda6-4d64-a0bf-cedf14c5d405)
![Screenshot 2023-06-13 092550](https://github.com/cepdnaclk/e18-6sp-3D-Model-Construction-for-a-target-class-using-XAI-Group16/assets/99112218/c5fc0919-c712-420b-b3f5-c69d44f3521b)
![Screenshot 2023-06-13 092528](https://github.com/cepdnaclk/e18-6sp-3D-Model-Construction-for-a-target-class-using-XAI-Group16/assets/99112218/5e28fb94-942a-40cf-b6be-29e1aad30f9c)

![Screenshot 2023-06-13 092605](https://github.com/cepdnaclk/e18-6sp-3D-Model-Construction-for-a-target-class-using-XAI-Group16/assets/99112218/5649426c-3097-4fb0-af65-6853eb772943)
![Screenshot 2023-06-13 092557](https://github.com/cepdnaclk/e18-6sp-3D-Model-Construction-for-a-target-class-using-XAI-Group16/assets/99112218/826bf9b5-fb33-4821-9f2d-bafe774290b2)
![Screenshot 2023-06-13 093016](https://github.com/cepdnaclk/e18-6sp-3D-Model-Construction-for-a-target-class-using-XAI-Group16/assets/99112218/52387107-3cf5-4213-a682-495272ed8f29)
![Screenshot 2023-06-13 092620](https://github.com/cepdnaclk/e18-6sp-3D-Model-Construction-for-a-target-class-using-XAI-Group16/assets/99112218/05fe67e4-1edf-4957-8166-142cc6072502)
![car1](https://github.com/cepdnaclk/e18-6sp-3D-Model-Construction-for-a-target-class-using-XAI-Group16/assets/73444543/4c18d010-eef3-419c-96b1-113d34196009)

## building a general 3D model with combining multiple results of 3D models

Uses the os and open3d libraries in Python to merge multiple point cloud files (.ply format) into a single fused point cloud 

![qss](https://github.com/cepdnaclk/e18-6sp-3D-Model-Construction-for-a-target-class-using-XAI-Group16/assets/73444543/0eba2c9d-5a95-4576-858c-8df893bd0802)


## Links

- [Project Repository](https://github.com/cepdnaclk/e18-6sp-3D-Model-Construction-for-a-target-class-using-XAI-Group16)
- [Project Page](https://cepdnaclk.github.io/e18-6sp-3D-Model-Construction-for-a-target-class-using-XAI-Group16/)
- [Department of Computer Engineering](http://www.ce.pdn.ac.lk/)
- [University of Peradeniya](https://eng.pdn.ac.lk/)


[//]: # (Please refer this to learn more about Markdown syntax)
[//]: # (https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
