# React Native Notes

- React Native does not run on the main user interface thread and perform asynchronously in the background to invoke the host's platform API (web, iOS, Android, etc.)
- React Native most basic component is the <View /> which acts like a <div /> in browsers
- There are platform specific components as well like <DatePickerIOS> which are usually suffixed by the platform (i.e. <TabBarIOS/> and <ToolbarAndroid/>) and is only used on the iOS platform.
- 