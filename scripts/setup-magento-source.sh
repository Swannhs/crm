#!/usr/bin/env bash
set -e

SOURCE_DIR="magento-src"
GIT_BRANCH="2.4-develop"
GIT_URL="https://github.com/magento/magento2.git"

if [ -f "${SOURCE_DIR}/bin/magento" ]; then
  echo "Magento source already exists in ${SOURCE_DIR}."
  exit 0
fi

echo "Magento source missing. Cloning ${GIT_URL} (${GIT_BRANCH}) into ${SOURCE_DIR}..."

# Remove empty directory if it exists to allow clone
if [ -d "${SOURCE_DIR}" ]; then
  rm -rf "${SOURCE_DIR}"
fi

git clone --branch "${GIT_BRANCH}" "${GIT_URL}" "${SOURCE_DIR}"

echo "Success! Magento source is ready at ./${SOURCE_DIR}."
echo "You can now start your Docker services."
