<div align="center">

# 🚀 Automated CI/CD Pipeline for Static Website Deployment using AWS CodePipeline

### Deploying a Static Website to Amazon S3 with GitHub Integration and Automated Continuous Deployment

![AWS](https://img.shields.io/badge/AWS-CodePipeline-orange?logo=amazonaws)
![Amazon S3](https://img.shields.io/badge/Amazon-S3-red?logo=amazons3)
![GitHub](https://img.shields.io/badge/GitHub-Version_Control-black?logo=github)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green)

---

</div>

# 📖 Project Overview

This project demonstrates an end-to-end **Continuous Integration and Continuous Deployment (CI/CD)** pipeline for automatically deploying a static website to **Amazon S3** whenever code changes are pushed to **GitHub**.

The project eliminates manual deployment by integrating GitHub with AWS CodePipeline, allowing every commit to automatically trigger the deployment process.

This implementation reflects an industry-standard DevOps workflow using AWS Cloud services.

---

# 🎯 Objectives

- Automate website deployment
- Eliminate manual uploads
- Learn CI/CD fundamentals
- Integrate GitHub with AWS
- Deploy static websites on Amazon S3
- Understand cloud deployment workflow

---

# ✨ Features

- ✅ Static Website Hosting using Amazon S3
- ✅ Automated Deployment using AWS CodePipeline
- ✅ GitHub Repository Integration
- ✅ Continuous Deployment (CD)
- ✅ Version Controlled Source Code
- ✅ Public Website Hosting
- ✅ Automatic Pipeline Trigger
- ✅ Build → Test → Deploy Workflow
- ✅ Zero Manual Deployment
- ✅ Scalable Cloud Infrastructure

---

# 🏗 Architecture

```
                Developer

                    │
                    │ Push Code
                    ▼

           GitHub Repository
                    │
                    │ Source Trigger
                    ▼

          AWS CodePipeline
          ┌────────┬────────┐
          │ Build  │  Test  │
          └────────┴────────┘
                    │
                    ▼

            Amazon S3 Bucket
                    │
                    ▼

          Static Website Hosting
                    │
                    ▼

               End Users
```

---

# 🔄 CI/CD Workflow

```
Edit Website
      │
      ▼
Commit Changes
      │
      ▼
Push to GitHub
      │
      ▼
GitHub Webhook Trigger
      │
      ▼
AWS CodePipeline
      │
      ▼
Build Stage
      │
      ▼
Test Stage
      │
      ▼
Deploy Stage
      │
      ▼
Amazon S3
      │
      ▼
Updated Live Website
```

---

# ☁ AWS Services Used

| AWS Service | Purpose |
|--------------|----------|
| Amazon S3 | Static Website Hosting |
| AWS CodePipeline | CI/CD Automation |
| IAM | Access Control |
| GitHub Connection | Source Repository Integration |

---

# 💻 Technologies Used

| Technology | Usage |
|------------|-------|
| HTML5 | Website Structure |
| CSS3 | Styling |
| JavaScript | Client-side Logic |
| Git | Version Control |
| GitHub | Source Repository |
| AWS S3 | Website Hosting |
| AWS CodePipeline | Deployment Automation |

---

# 📂 Project Structure

```
AWS_CodePipeline/

│
├── css/
│     └── style.css
│
├── js/
│     └── main.js
│
├── images/
│
├── index.html
│
├── README.md
│
└── screenshots/
      ├── GitHub Repository.png
      ├── Upload Successful.png
      ├── S3 Bucket Objects.png
      ├── Bucket Policy.png
      ├── Static Website Hosting.png
      ├── Live Website Home.png
      ├── Pipeline Configuration Review.png
      ├── Pipeline Initial Creation.png
      ├── Pipeline Build Running.png
      ├── Pipeline Test Running.png
      ├── Pipeline Success.png
      ├── GitHub Commit.png
      └── Updated Website.png
```

---

# ⚙ Implementation Steps

## 1️⃣ Create GitHub Repository

- Create a GitHub repository (`Dhanush104/aws-s3-codepipeline-static-website`).
- Upload and commit the website source code.

![GitHub Repository](screenshots/GitHub%20Repository.png)

---

## 2️⃣ Create Amazon S3 Bucket & Upload Assets

- Create an S3 bucket (`dhanush-portfolio-aws`).
- Upload website files (`index.html`, `css/`, `js/`, `images/`).

![Upload Successful](screenshots/Upload%20Successful.png)
![S3 Bucket Objects](screenshots/S3%20Bucket%20Objects.png)

---

## 3️⃣ Configure Bucket Security & Policy

- Disable Block Public Access settings.
- Add bucket policy allowing public `s3:GetObject` access.

![Bucket Policy](screenshots/Bucket%20Policy.png)

---

## 4️⃣ Configure Static Website Hosting

- Enable Static Website Hosting in S3 bucket properties.
- Set `index.html` as the index document.

![Static Website Hosting](screenshots/Static%20Website%20Hosting.png)
![Live Website Home](screenshots/Live%20Website%20Home.png)

---

## 5️⃣ Create AWS CodePipeline

- Configure pipeline steps:
  - **Source:** GitHub (via AWS CodeConnection)
  - **Build:** AWS CodeBuild
  - **Test:** AWS CodeBuild
  - **Deploy:** Amazon S3

![Pipeline Configuration Review](screenshots/Pipeline%20Configuration%20Review.png)
![Pipeline Initial Creation](screenshots/Pipeline%20Initial%20Creation.png)

---

## 6️⃣ Trigger Automated CI/CD Deployment

- Commit and push changes to GitHub repository.
- GitHub webhook triggers AWS CodePipeline automatically.
- Pipeline executes through Source → Build → Test → Deploy stages.

![GitHub Commit](screenshots/GitHub%20Commit.png)
![Pipeline Build Running](screenshots/Pipeline%20Build%20Running.png)
![Pipeline Test Running](screenshots/Pipeline%20Test%20Running.png)
![Pipeline Success](screenshots/Pipeline%20Success.png)
![Updated Website](screenshots/Updated%20Website.png)

---

# 📸 Project Screenshots

### 1. GitHub Repository
![GitHub Repository](screenshots/GitHub%20Repository.png)

---

### 2. S3 Assets Uploaded & Bucket Objects
![Upload Successful](screenshots/Upload%20Successful.png)
![S3 Bucket Objects](screenshots/S3%20Bucket%20Objects.png)

---

### 3. S3 Bucket Policy & Permissions
![Bucket Policy](screenshots/Bucket%20Policy.png)

---

### 4. S3 Static Website Hosting Configuration
![Static Website Hosting](screenshots/Static%20Website%20Hosting.png)

---

### 5. Initial Live Website Deployment
![Live Website Home](screenshots/Live%20Website%20Home.png)

---

### 6. AWS CodePipeline Setup & Review
![Pipeline Configuration Review](screenshots/Pipeline%20Configuration%20Review.png)

---

### 7. Pipeline Initial Execution Started
![Pipeline Initial Creation](screenshots/Pipeline%20Initial%20Creation.png)

---

### 8. GitHub Code Change Commit Trigger
![GitHub Commit](screenshots/GitHub%20Commit.png)

---

### 9. Pipeline Build Stage Running
![Pipeline Build Running](screenshots/Pipeline%20Build%20Running.png)

---

### 10. Pipeline Test Stage Running
![Pipeline Test Running](screenshots/Pipeline%20Test%20Running.png)

---

### 11. Pipeline Execution Fully Succeeded
![Pipeline Success](screenshots/Pipeline%20Success.png)

---

### 12. Updated Live Website Deployed
![Updated Website](screenshots/Updated%20Website.png)

---

# 🧪 Testing

| Test Case | Expected | Result |
|------------|----------|---------|
| Upload Website | Success | ✅ Pass |
| Enable Hosting | Success | ✅ Pass |
| GitHub Connection | Success | ✅ Pass |
| Pipeline Trigger | Success | ✅ Pass |
| Build Stage | Success | ✅ Pass |
| Test Stage | Success | ✅ Pass |
| Deploy Stage | Success | ✅ Pass |
| Website Updated | Success | ✅ Pass |

---

# 📈 Results

Successfully implemented an automated CI/CD pipeline that deploys a static website hosted on Amazon S3 whenever changes are committed to the GitHub repository.

The deployment process is fully automated and eliminates manual file uploads.

---

# 🎓 Learning Outcomes

Through this project, I gained practical experience with:

- Continuous Integration
- Continuous Deployment
- Amazon S3
- AWS CodePipeline
- IAM Permissions
- GitHub Integration
- Static Website Hosting
- Deployment Automation
- DevOps Workflow
- Cloud Infrastructure

---

# 🚀 Future Enhancements

- CloudFront CDN
- Route53 Custom Domain
- HTTPS using ACM
- AWS CodeDeploy
- Blue/Green Deployment
- Deployment Notifications (Amazon SNS)
- Monitoring using CloudWatch

---

# 👨💻 Author

## Dhanush Kumar R

Computer Science Engineer

Cloud Computing | AWS | DevOps | Full Stack Developer

📧 Email: trdhanush1234@gmail.com

🔗 LinkedIn: https://www.linkedin.com/in/dhanushkumar2004/

💻 GitHub: https://github.com/Dhanush104

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.

It motivates me to build and share more cloud projects.