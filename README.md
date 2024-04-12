# Water Monitoring Web Application

## Introduction

The Water Monitoring Web Application is designed to provide a platform for monitoring the quality and purity of water sources. It aims to facilitate users in monitoring water parameters such as pH level, temperature, Dissolved oxygen level, and chlorine concentration, receiving alerts, generating reports, and providing administrative control over the system and saving entry data in a Hyperledger blockchain network for security.

## Objectives

- Develop a user-friendly web application for monitoring water quality and purity.
- Implement authentication mechanisms for user login and administrative access.
- Enable users to monitor real-time water quality data.
- Provide administrators with control over user accounts and system configurations.
- Implement reporting functionalities to generate reports on water parameters.
- Enable SMS and email alerts for critical events or deviations in water quality.
- Collect remote data to provide daily, hourly, or real-time reports.
- Provide web-based monitoring and data archival, allowing access to data, trends, and reports from anywhere.

## Functional Requirements

### User Management

- Users should be able to log in using their credentials.
- Password reset functionality should be provided.
- Timestamp should be visible based on the user's time zone.
- Admin should be able to add new devices and update the normal range for water quality.
- Administrators should be able to manage user accounts (e.g., activate, deactivate).

### Water Quality Monitoring

- Users should be able to view real-time data related to water quality.
- Water quality parameters such as pH level, turbidity, chlorine concentration, etc., should be displayed.
- Historical data of water quality should be accessible to users.

### Reporting

- Users should be able to generate reports on water quality data for specific time periods.
- Reports should be downloadable in commonly used formats (e.g., PDF, CSV).
- Reports should include details such as date, time, and water quality parameters.

### Alerts

- Users should receive email and SMS alerts for critical deviations in water quality parameters.
- Alerts should be configurable based on predefined thresholds.
- Administrators should be able to manage alert settings.

### Administrative Controls

- Administrators should have access to an administrative dashboard with elevated privileges.
- The administrative dashboard should allow managing user accounts, system configurations, and alert settings.
- Administrators should be able to view system logs and activity history.

## Non-Functional Requirements

- **Performance:** The application should be capable of handling multiple concurrent users and real-time data updates without significant performance degradation.
- **Security:** Secure authentication mechanisms (e.g., encryption, password hashing) should be implemented to protect user data. Data transmission should be encrypted using HTTPS protocol.
- **Scalability:** The system should be designed to scale easily to accommodate increasing users and data volumes.
- **User Experience:** The user interface should be intuitive, responsive, and accessible across different devices and screen sizes.

## Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript (React.js)
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Hyperledger Blockchain**

## Conclusion

The Water Monitoring Web Application aims to provide an effective solution for monitoring and managing water quality. By adhering to the outlined requirements and utilizing appropriate technologies, the project will deliver a robust and reliable application to address the needs of users concerned with water purity and sanitation.
