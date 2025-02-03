
## **Overview**
This project implements a Playwright-driven test suite designed to validate workflows within the Demo App. The suite is built with a focus on **data-driven testing**, ensuring scalability, maintainability, and minimal code duplication. Test cases dynamically adapt to scenarios using a JSON-based configuration.
---

## **Features**
- **Automated Login**: Automates the login process for the Demo App using predefined credentials.
- **Data-Driven Testing**: Scenarios are defined in a JSON file, enabling easy addition of new test cases without modifying test scripts.
- **Cross-Browser Testing**: Supports testing on Chromium, Firefox, and WebKit.
- **Dynamic Validation**: Verifies tasks, tags, and columns dynamically for different workflows.

---

## **Project Structure**
```plaintext
LoopQA/
├── tests/                  # Contains Playwright test scripts
│   └── login.spec.js       # Test cases for login and task verification
├── data/                   # Contains test data
│   └── testData.json       # JSON file with login credentials and test cases
├── pages/                  # Contains page object models
│   └── loginPage.js        # Page object for login interactions
├── playwright.config.js    # Playwright configuration file
├── package.json            # Node.js project dependencies
└── README.md               # Project documentation
```

---

## **Setup and Installation**

### Prerequisites
- Node.js (v14+)
- npm or yarn package manager

### Installation
1. Clone the repository:
   ```bash
   git clone <https://github.com/kostiahuryuk/LoopQA.git>
   cd LoopQA
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

---

## **Usage**

### Running the Tests
Run all tests across configured browsers:
```bash
npx playwright test
```


## **Test Case Scenarios**
The test cases are defined in `tests/data/testData.json` and include the following scenarios:

## Test Case 1
- Login to Demo App.
- Navigate to "Web Application."
- Verify "Implement user authentication" is in the "To Do" column.
- Confirm tags: "Feature" "High Priority”
## Test Case 2
- Login to Demo App.
- Navigate to "Web Application."
- Verify "Fix navigation bug" is in the "To Do" column.
- Confirm tags: "Bug"
## Test Case 3
- Login to Demo App.
- Navigate to "Web Application."
- Verify "Design system updates" is in the "In Progress" column.
- Confirm tags: "Design”
## Test Case 4
- Login to Demo App.
- Navigate to "Mobile Application."
- Verify "Push notification system" is in the "To Do" column.
- Confirm tags: "Feature”
## Test Case 5
- Login to Demo App.
- Navigate to "Mobile Application."
- Verify "Offline mode" is in the "In Progress" column.
- Confirm tags: "Feature" & "High Priority”
## Test Case 6
- Login to Demo App.
- Navigate to "Mobile Application."
- Verify "App icon design" is in the "Done" column.
- Confirm tags: "Design”

