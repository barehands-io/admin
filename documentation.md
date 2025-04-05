# KYC Admin Application Documentation

## Project Overview
The KYC Admin application is built with React and TypeScript, using React Router v7 for routing and Tailwind CSS for styling. The project follows a modular architecture, with components organized by feature and reusable hooks for shared logic.

## Tech Stack
- **Frontend**: React 19, TypeScript
- **Router**: React Router v7
- **Styling**: Tailwind CSS 4
- **Build Tools**: Vite
- **Deployment**: Azure Static Web Apps

## Development

### Commands
- **Build**: `npm run build`
- **Development Server**: `npm run dev`
- **Start Server**: `npm run start`
- **Type Checking**: `npm run typecheck`

### Code Style Guidelines
- **TypeScript**: Use strict mode with proper type annotations
- **Formatting**: 2 spaces indentation, trailing commas in multiline objects
- **Imports**: Group imports by type (React, external libs, internal modules)
- **Component Naming**: PascalCase for React components, camelCase for functions
- **Route Handlers**: Export metadata functions (meta, loader, action) alongside components
- **Error Handling**: Use ErrorBoundary components with appropriate error messages
- **Path Aliases**: Use `~/` alias for imports from the app directory

## Deployment to Azure Static Web Apps

### Prerequisites
- Azure subscription
- Azure CLI installed
- Node.js LTS version
- GitHub or Azure DevOps repository for your code (recommended)

### Deployment Steps

1. **Create Azure Static Web App Resource**
   ```bash
   # Login to Azure
   az login

   # Create a resource group (if not existing)
   az group create --name kyc-admin-rg --location eastus

   # Create the Static Web App
   az staticwebapp create \
     --name kyc-admin-app \
     --resource-group kyc-admin-rg \
     --location "eastus2" \
     --source https://github.com/yourusername/your-repo \
     --branch main \
     --app-location "/" \
     --output-location "build/client" \
     --api-location ""
   ```

2. **Configure Static Web App Settings**
   Create a `staticwebapp.config.json` file in the root of your project:
   ```json
   {
     "navigationFallback": {
       "rewrite": "/index.html",
       "exclude": ["/images/*.{png,jpg,gif}", "/css/*", "/assets/*"]
     },
     "routes": [
       {
         "route": "/*",
         "serve": "/index.html",
         "statusCode": 200
       }
     ]
   }
   ```

3. **GitHub Actions Workflow Setup**
   Azure Static Web Apps automatically creates a GitHub Actions workflow file. You can customize it based on your SSR needs:
   ```yaml
   # .github/workflows/azure-static-web-apps.yml
   name: Deploy to Azure Static Web Apps

   on:
     push:
       branches:
         - main
     pull_request:
       types: [opened, synchronize, reopened, closed]
       branches:
         - main

   jobs:
     build_and_deploy_job:
       runs-on: ubuntu-latest
       name: Build and Deploy
       steps:
         - uses: actions/checkout@v3
         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: 18
         - name: Install Dependencies
           run: npm ci
         - name: Build
           run: npm run build
         - name: Deploy
           id: deploy
           uses: Azure/static-web-apps-deploy@v1
           with:
             azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
             repo_token: ${{ secrets.GITHUB_TOKEN }}
             action: "upload"
             app_location: "/"
             api_location: ""
             output_location: "build/client"
   ```

4. **Manual Deployment Using CLI**
   If you prefer manual deployment:
   ```bash
   # Install the SWA CLI
   npm install -g @azure/static-web-apps-cli

   # Build the application
   npm run build

   # Deploy using the CLI
   swa deploy ./build/client --env production --deployment-token <your-deployment-token>
   ```

5. **Verify Deployment**
   - Navigate to the URL provided after deployment (typically `https://[random-name].[region].azurestaticapps.net`)
   - Check if the application loads correctly
   - Review logs in the Azure Portal

### Benefits of Azure Static Web Apps
- Built specifically for modern web applications
- Free hosting tier available
- Integrated CI/CD with GitHub or Azure DevOps
- Global CDN distribution
- Free SSL certificates
- Built-in API support (optional)
- Authentication and authorization capabilities
- Custom domain support
- Preview environments for pull requests