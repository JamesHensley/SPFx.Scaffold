# SPFx Scaffold Project

## Summary

Simple shell to make using modern applications inside SharePoint on-premise easier/faster


## Prerequisites
> Have patience

## Version history

Version|Date|Comments
-------|----|--------
0.1|10 June 2021|Initial checkin

## Files to modify or rename
- Spfx (legacy/on-prem files)
  - spfx/webparts/Scaffold (rename)
  - spfx/package.json (modify)
  - spfx/config/config.json (modify)
  - spfx/config/package-solution.json (modify)
  - spfx/ScaffoldWebPart.ts (rename & modify)
  - spfx/ScaffoldWebPart.manifest.json (rename & modify)
- External (modern components)  
  - external/package.json (modify)
  - external/ScaffoldWebPart.manifest.json (rename & modify)
  - external/ScaffoldWebPart.ts (rename & modify; must still use legacy components compatible with your installation)
    - 2016 needs to use property-pane methods in "sp-webpart-base" versus "sp-property-pane"; not sure about 2019
  - external/webpack/webpack.common.js (modify)
  - external/webparts/Scaffold (rename)
  - external/webparts/Scaffold/components/scaffold.module.scss.d.ts (rename & modify)
  - external/webparts/Scaffold/components/scaffold.tsx (rename & modify)

## Minimal Path to disaster
- Clone this repository
- Ensure that you are at the solution folder
- From the "external" folder, run:
  - **npm run watch**
- From the "spfx" folder, run:
  - **gulp serve**

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

## References

- [Build SharePoint Framework solutions for on-premises SharePoint with ANY version of React, TypeScript or Office UI Fabric React](https://spblog.net/post/2019/08/08/build-sharepoint-framework-solutions-for-on-premises-sharepoint-with-any-version-of-react-typescript-or-office-ui-fabric-react)

- [Original Developer's project on GitHub](https://github.com/spblog/spfx-with-any-versions-of-deps)
