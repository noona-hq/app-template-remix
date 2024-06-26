#!/bin/bash

# Prompt for the new project name
read -p 'Enter the new project name: ' new_project_name

# Template name
old_name="app-template-react"

if [ ! -f ".env" ]; then
  cp .env.example .env
fi

# Convert new project name to use underscores instead of dashes for the database name
new_db_name="${new_project_name//-/_}"  # Replace dashes with underscores for the database name

# Update the prisma/schema.prisma file with the new, underscored database name
sed -i '' -e "s|$old_name|$new_db_name|g" prisma/schema.prisma

# Global find and replace the old name with the new name, excluding this script file
# It's important to exclude any .git directory, this script, or other directories/files you wish to exclude
find .env package.json app helm -type f -exec sed -i '' -e "s|$old_name|$new_project_name|g" {} +

# If the project name affects directory names, rename them as well
if [ -d "helm/$old_name" ]; then
    mv "helm/$old_name" "helm/$new_project_name"
fi

echo "Project has been renamed to $new_project_name"