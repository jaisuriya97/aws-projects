# 🚀 AWS Projects

## 📅 Day 1 Task: Host a Static Website on AWS S3

Today, I hosted a static website using **Amazon S3**. This marks the beginning of my 30-day AWS project challenge.

---

## ✅ What I Did

- Created an S3 bucket with public access enabled
- Uploaded static website files (HTML)
- Enabled static website hosting in bucket settings
- Configured bucket policy for public access
- Tested the website using the S3 website endpoint

---


## 🛠️ Technologies Used

- Amazon S3
- HTML/CSS

---

## 📸 Screenshot
![image](https://github.com/user-attachments/assets/e600b251-d65d-4e75-9b38-f96a421513ae)


---

## 📌 Notes

- Ensure all files (like `index.html`) are uploaded to the root of the bucket.
- Make sure bucket policy allows public `GetObject` access.
- Keep `index.html` as the default root object.

---

## 📅 Day 2 Task: Deploy a Tic Tac Toe Game Using AWS CodePipeline

Today, I deployed a modern **Tic Tac Toe game**—designed using **Vibe Code (AI UI builder)**—by automating the process with **AWS CodePipeline**, which pulls the code from **GitHub** and hosts it via **Amazon S3**.

---

## ✅ What I Did

- Designed a responsive Tic Tac Toe UI using Vibe Code
- Created a GitHub repo for the game (HTML, CSS, JS)
- Set up AWS CodePipeline to deploy from GitHub to S3
- Enabled S3 static website hosting and public access
- Validated live deployment by pushing changes to GitHub

---

## 🛠️ Technologies Used

- Vibe Code (AI UI Builder)  
- AWS CodePipeline  
- Amazon S3  
- GitHub  
- HTML/CSS/JavaScript

---

## 🗂️ Architecture Diagram

```plaintext
     +------------+         +------------------+         +-------------------+
     |  Developer |  Push   |     GitHub Repo  | Trigger |   AWS CodePipeline |
     +------------+ ------> +------------------+ ------> +-------------------+
                                                               |
                                                               v
                                                  +-------------------------+
                                                  | Amazon S3 (Web Hosting) |
                                                  +-------------------------+
                                                               |
                                                               v
                                               +----------------------------------+
                                               |  User accesses static website   |
                                               |  (Tic Tac Toe game) via S3 URL  |
                                               +----------------------------------+
```
## 📸 Screenshot
![image](https://github.com/user-attachments/assets/43d4a836-44ed-4783-abb2-04667eda7d04)
