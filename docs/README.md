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

The aim of this project is to create a general 3D skeleton for a target object through a process which uses a model that understands  the unique and real features of the target object using XAI.

### Problem Domain
* Machine learning models for classification are unclear on how they classify images and what criteria they use.
* These models may learn irrelevant features that can affect their decision-making, potentially leading to inaccuracies.

  
### Project scope
Here we aim to uncover the underlying decision-making criteria and features using explainable methods and reconstruct them in 3D for a better understanding

![image (1)](https://github.com/cepdnaclk/e18-6sp-3D-Model-Construction-for-a-target-class-using-XAI-Group16/assets/73444543/f9578d5d-c3a1-411b-9288-202f3779dbe2) ---->  ![image](https://github.com/cepdnaclk/e18-6sp-3D-Model-Construction-for-a-target-class-using-XAI-Group16/assets/73444543/98b38090-994d-48b6-9d2b-4488829827c8)


## Image Classification Model
As the image classification model, we're using MobileNet Image Classification With TensorFlow's Keras API.
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
Result : Model predicting the image as a car correctly
![car_edit](https://github.com/cepdnaclk/e18-6sp-3D-Model-Construction-for-a-target-class-using-XAI-Group16/assets/73444543/5e751a09-924d-4532-a442-2f68c812ad89)


## SHAP output
![WhatsApp Image 2023-06-13 at 10 10 378](https://github.com/cepdnaclk/e18-6sp-3D-Model-Construction-for-a-target-class-using-XAI-Group16/assets/73444543/aea640c0-6149-4352-b73f-1d663b5e25ff)

## 3D reconstruction results
![dog1](https://github.com/cepdnaclk/e18-6sp-3D-Model-Construction-for-a-target-class-using-XAI-Group16/assets/73444543/f15d53f9-4ee9-4ffa-afac-6d2f86614658)   ![dog2](https://github.com/cepdnaclk/e18-6sp-3D-Model-Construction-for-a-target-class-using-XAI-Group16/assets/73444543/586722b4-4edc-41d8-a0cf-07efda745c1c) 
![red1 (1)](https://github.com/cepdnaclk/e18-6sp-3D-Model-Construction-for-a-target-class-using-XAI-Group16/assets/73444543/3ca78830-3228-4726-a113-35544c988d2f) ![car-b](https://github.com/cepdnaclk/e18-6sp-3D-Model-Construction-for-a-target-class-using-XAI-Group16/assets/73444543/5762f87c-1595-4cdb-8f8a-0a9f8e855034)

## Process & Progression

### Machine Learning Section
* Created and trained an image Classification model using MobileNet
* Outputs of the image classification model were explained using SHAP
* Classified images using trained ML model - Testing
* Removed the irrelevant pixels of an image  using SHAP

### 2D to 3D Reconstruction Section
* Identified a suitable method for 3D reconstruction for a given 2D image using point E cloud techniques
* Using that method, created 3D models for preprocessed images

### Software Engineering Section
* Created a Dashboard with the following features.
* Image classification 
* Feature to Remove the irrelevant pixels of a given picture and output the 3D object of that.

## Dashboard

## Testing
* Testing for Machine Learning Model - manual testing
 
![ml_test1 (1)](https://github.com/cepdnaclk/e18-6sp-3D-Model-Construction-for-a-target-class-using-XAI-Group16/assets/73444543/d21a0239-3afb-496e-a82a-484519dbe413)
![ml_test2 (1)](https://github.com/cepdnaclk/e18-6sp-3D-Model-Construction-for-a-target-class-using-XAI-Group16/assets/73444543/81c8d4fe-6c92-455a-9a7e-84ba78e39240)

* Dashboard - endpoint testing using post-man
  
  ![image (2)](https://github.com/cepdnaclk/e18-6sp-3D-Model-Construction-for-a-target-class-using-XAI-Group16/assets/73444543/e33a937a-fefd-4fd2-80d8-2179e429fb46)

## Links

- [Project Repository](https://github.com/cepdnaclk/e18-6sp-3D-Model-Construction-for-a-target-class-using-XAI-Group16)
- [Project Page](https://cepdnaclk.github.io/e18-6sp-3D-Model-Construction-for-a-target-class-using-XAI-Group16/)
- [Department of Computer Engineering](http://www.ce.pdn.ac.lk/)
- [University of Peradeniya](https://eng.pdn.ac.lk/)


[//]: # (Please refer this to learn more about Markdown syntax)
[//]: # (https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
