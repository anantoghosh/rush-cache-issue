# Build cache issue

If the project`blank`, which does not require any build, has anything in the 
`build` script besides empty string `""`, then build caching does not work
for the `logger` package.
