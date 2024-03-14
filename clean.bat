@echo off

rem This batch file will run prettier on all files in the current directory.

rem Run prettier.
npx prettier . --write

rem check prettier.
npx prettier . --check

rem Exit the batch file.
exit