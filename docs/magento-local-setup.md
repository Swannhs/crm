# Magento Local Setup

The Magento Docker container does **not** clone Magento from GitHub during startup. You must clone the Magento source code onto your host machine into the `magento-src` folder in the project root before starting the stack.

## Setup Instructions

1. Clone Magento source into the `magento-src` directory on your host:
   ```bash
   git clone https://github.com/magento/magento2.git magento-src
   ```

2. Checkout the desired branch (e.g., `2.4-develop`):
   ```bash
   cd magento-src
   git checkout 2.4-develop
   cd ..
   ```

3. (Optional) Run the automated setup script if you prefer:
   ```bash
   ./scripts/setup-magento-source.sh
   ```

4. Start the Docker services:
   ```bash
   docker compose up --build
   ```

## Troubleshooting

- **No Internet in Container:** The container no longer clones Magento at runtime, so internet access is only needed once on your host machine to fetch the repository.
- **GitHub Blocked?** You can download the Magento source as a ZIP file from GitHub and extract its contents directly into the `magento-src` folder in this repository root.
- **Missing Source Error:** The Magento container will intentionally fail to start if `magento-src/bin/magento` is not found, showing an error instructing you to complete these steps. Ensure the folder is correctly named `magento-src` and placed in the project root.