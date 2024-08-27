# Internet Computer Setup on Windows

This guide walks you through setting up your development environment for Internet Computer (IC) Web3 application development on Windows.

## Table of Contents

- [Requirements](#requirements)
- [Installation Steps](#installation-steps)
  - [1. Install Windows Subsystem for Linux (WSL)](#1-install-windows-subsystem-for-linux-wsl)
  - [2. Install Visual Studio Code (VSCode)](#2-install-visual-studio-code-vscode)
  - [3. Install Node.js](#3-install-nodejs)
  - [4. Install DFX](#4-install-dfx)
- [Testing Your Setup](#testing-your-setup)
  - [Create and Deploy a Hello World DApp](#create-and-deploy-a-hello-world-dapp)
  - [Deploy the DApp](#deploy-the-dapp)
- [Notes](#notes)

## Requirements

- **Operating System:** Windows 10 or higher (version 2004 or higher, Build 19041.xxx or higher)
- **System Type:** 64-bit machine (System type x64 based PC)

## Installation Steps

### 1. Install Windows Subsystem for Linux (WSL)

1. Open **Windows PowerShell** as Administrator.
2. Run the following command to install WSL:
   ```bash
   wsl --install
   ```
3. Restart your computer when prompted.
4. Upon restart, set up an Ubuntu username and password (remember these credentials).
5. Confirm WSL installation by running:
   ```bash
   wsl --list --verbose
   ```

### 2. Install Visual Studio Code (VSCode)

1. Download and install the latest version of [VSCode](https://code.visualstudio.com/).
2. Install the Motoko language extension from [here](https://marketplace.visualstudio.com/items?itemName=dfinity-foundation.vscode-motoko).
3. Install the Remote WSL extension from [here](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl).

### 3. Install Node.js

1. Open **Ubuntu** from the Start menu.
2. Install Homebrew by running the following command:
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
3. Follow the instructions provided by Homebrew to add it to your PATH.
4. Install essential build tools:
   ```bash
   sudo apt-get install build-essential
   ```
5. Verify Homebrew installation:
   ```bash
   brew -version
   ```
6. Install Node.js using Homebrew:
   ```bash
   brew install node@16
   ```
7. Verify Node.js installation:
   ```bash
   node -version
   ```
8. If necessary, link Node.js to Homebrew:
   ```bash
   brew link node@16
   ```

### 4. Install DFX

1. Open **Ubuntu** from the Start menu.
2. Install DFX by running the following command:
   ```bash
   DFX_VERSION=0.9.3 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
   ```
3. Add DFX to your PATH:
   ```bash
   export PATH=$PATH:<INSTALLATION_PATH>
   ```
   Replace `<INSTALLATION_PATH>` with the path provided by the DFX installer.
4. Verify DFX installation:
   ```bash
   dfx --version
   ```

## Testing Your Setup

### Create and Deploy a Hello World DApp

1. Open **Ubuntu** and create a new directory for IC projects:
   ```bash
   mkdir ic-projects
   cd ic-projects
   ```
2. Create a new IC project:
   ```bash
   dfx new hello
   ```
3. Open the project in **VSCode** using the Remote WSL extension.

### Deploy the DApp

1. Start the local DFX server:
   ```bash
   dfx start
   ```
2. In a new terminal, deploy the DApp:
   ```bash
   dfx deploy
   ```
3. Start the DApp:
   ```bash
   npm start
   ```
4. Open your browser and go to `http://localhost:8080/` to view your DApp.

## Notes

- Use DFX version 0.9.3 to avoid compatibility issues.
- Avoid upgrading DFX even if prompted.

