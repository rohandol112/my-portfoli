@echo off
echo Copying project images...

REM Create the destination directory if it doesn't exist
if not exist "j:\Hackanova\rosportfolio\my-portfoli\public\images\projects" (
    mkdir "j:\Hackanova\rosportfolio\my-portfoli\public\images\projects"
)

REM Copy and rename the screenshots
echo Copying DocuMind AI screenshot...
copy "c:\Users\Rohan\OneDrive\Pictures\Screenshots\Screenshot 2025-08-22 011309.png" "j:\Hackanova\rosportfolio\my-portfoli\public\images\projects\documind-dashboard.png"

echo Copying Water Filter screenshot...
copy "c:\Users\Rohan\OneDrive\Pictures\Screenshots\Screenshot 2025-06-02 051541.png" "j:\Hackanova\rosportfolio\my-portfoli\public\images\projects\water-filter-app.png"

echo Copying Shastra screenshot...
copy "c:\Users\Rohan\OneDrive\Pictures\Screenshots\Screenshot 2025-09-15 175017.png" "j:\Hackanova\rosportfolio\my-portfoli\public\images\projects\shastra-processing.png"

echo Project images copied successfully!
echo.
echo The following files have been created:
echo - documind-dashboard.png (DocuMind AI)
echo - water-filter-app.png (Water Filter)
echo - shastra-processing.png (Shastra)
echo.
echo You still need to add an image for the Heirloom project as heirloom-blockchain.png
echo.
pause