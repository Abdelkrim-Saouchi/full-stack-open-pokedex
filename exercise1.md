1- If I want to use rust in CI, I would use:
- For liniting: Clippy which is a great linker to enforce best practices. wanrnings in Clippy can be transmetted to compilation errors.
- For Testing: "cargo test" looks very convenient for CI in rust projects. any failed test makes CI workflow fails.
-For Building: "cargo build" is also a great choice for CI in rust. the familiarity of this tools in local projects can be transformed to the CI workflow. the integration of cargo build looks very easy in github actions using yml files.
2- There are a lot of alternatives of jenkisn and github actions in CI/CD:
-CercleCi: looks good especially the free tier.
-BuildKite: looks Pro! for leading companies.
-Travis CI: developers keeps complaining about it!
- Google cloud build: suitable for google cloud services.
-Azure Pipelines: Great for apps hosted on Azure platforme.
-GitLab CI/CD: a good rival of github actions.
3- The could-based CI is good for samll projects and small teams. it is cost effective and require less maintains and less effort for setup and configurations. but it is limited for projects that consume huge resources like GPU, hard to costumsize and may lack some features or specific workflows if the hosting platform does not provide it! it might be very expensive in big teams.
for the self-hosed Ci, the possibilities are limitless! we can have full control on hardware, security and features. good for big teams and big projects. It can be cost effective for projects and teams that require . but can be hard to setup and maintain and have high learning curve!
