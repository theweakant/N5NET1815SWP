# Diamond Shop System

## Project Overview

**Title**
Diamond Shop System

**Description**
Diamond Shop System aims to streamline operations in the jewelry industry by providing a comprehensive platform for managing sales, inventory, promotions, employee performance, customer loyalty programs, and reporting.

## Key Features (Epics)

1. **Account Management:**
    - Register new customer accounts and ensure all mandatory fields are filled.
    - Validate email formats and password matching during registration.
    - Enable customers, staff, and admins to log in with valid credentials and handle failed login attempts.
    - Allow customers to edit profile information and update passwords, ensuring proper validation.

2. **Order Management:**
    - Enable staff to view, filter, search, and manage orders, including updating statuses and adding internal notes.
    - Allow delivery staff to manage deliveries, update statuses, record delivery details, and reschedule failed deliveries.
    - Provide customers with order tracking, status updates, and delivery notes access.
    - Facilitate managers in overseeing order fulfillment, generating reports, and receiving alerts for delayed orders.
      
3. **Product Management:**
    - Allow admins to manage the product catalog, including adding, editing, and deactivating/reactivating products and categories.
    - Enable customers to browse, filter, and sort products, and view detailed information and stock status.
    - Provide functionality for customers to add items to their cart and ensure the cart updates correctly.
    - Allow managers to analyze product performance and view sales trends to make inventory decisions.

4. **Reporting and Analytics:**
    - Provide managers with sales reports in various formats (daily, weekly, monthly) and allow filtering by date range and category.
    - Enable data export to CSV files and viewing reports on refunded orders.

5. **User Management:**
    - Allow admins to manage user accounts, including creating, editing, deactivating/reactivating, and resetting passwords.
    - Ensure deactivated users cannot access the system.
    - Enable users to manage account settings, including password changes and contact information updates, with proper validations and notifications.

6. **Security:**
    - Store passwords in encrypted form.
    - Log failed login attempts and lock accounts after multiple failed attempts.
    - Ensure user sessions expire after inactivity and require re-authentication for sensitive operations.

7. **Shopping Experience:**
    - Enable customers to complete purchases, including checkout, shipping method selection, and payment information entry.
    - Ensure inventory updates after successful purchases and allow customers to view order history.



## Technologies Used

**Frontend**
- HTML, CSS
- React.js with Vite
- JavaScript
- Chart.js
- Redux

**Backend**
- Java
- Spring Boot
- Spring JPA
- Thymeleaf

**Database**
- MySQL

**Hosting**
- DigitalOcean

**Payment**
- VNPAY

---

## Team Assignment

| Role             | Team Member                        |
|------------------|------------------------------------|
| **Project Manager** |  Quốc Phong                     |
| **Frontend Developer** | Quốc Phong, Quốc Nam, Tuấn Anh, Quang Nhật                  |
| **Backend Developer** | Khánh Tùng                    |
| **Database Administrator** | Khánh Tùng              |
| **Tester**    | Quốc Nam, Thế Sơn, Đại Dĩ, Minh Nhật, Gia Bảo                          |

---
## Team Tester Assignment

| Sprint         | Use Case                      |
|----------------|------------------------------------|
| **Sprint 1**   | UC-01, UC-02, UC-03, UC-04     |
| **Sprint 2**   | UC-05, UC-06, UC-07, UC-08     |
| **Sprint 3**   | UC-09, UC-10, UC-11, UC-12     |
| **Sprint 4**   | UC-13, UC-14, UC-15, UC-16, UC-17, UC-18 |



## Sprint Assignments

| Name  | Sprint 1  | Sprint 2  | Sprint 3  | Sprint 4  |
|-------|-----------|-----------|-----------|-----------|
| Nam   | UC-1      |           |           |           |
| Sơn   | UC-1, UC-2|           |           |           |
| Dĩ    | UC-2, UC-3|           |           |           |
| Nhật  | UC-3      |           |           |           |
| Bảo   | UC-4      |           |           |           |


## Project Structure

**Frontend Directory Structure**
- `/src`: Contains React components, Redux state management setup, and styles.
- `/public`: Stores static assets like images and fonts.

**Backend Directory Structure (Java/Spring Boot)**
- `/src/main`: Java source files for controllers, services, repositories, etc.
- `/resources`: Configuration files, application properties, and static resources.

## Conclusion
Diamond Shop System integrates modern frontend technologies with a robust Java backend to deliver a scalable and efficient solution for managing various aspects of jewelry sales and operations. This setup ensures a user-friendly interface, real-time data updates, and comprehensive reporting capabilities to enhance business management and customer satisfaction.
