import * as Icons from "@mui/icons-material";
import { Box, Paper, Stack, Typography } from "@mui/material";
import type { ElementType } from "react";

const iconLibrary = Icons as Record<string, ElementType>;

const heavyIconNames = [
  "AppShortcut",
  "AppsOutage",
  "Architecture",
  "Archive",
  "AreaChart",
  "ArrowBack",
  "ArrowBackIos",
  "ArrowBackIosNew",
  "ArrowCircleDown",
  "ArrowCircleLeft",
  "ArrowCircleRight",
  "ArrowCircleUp",
  "ArrowDownward",
  "ArrowDropDown",
  "ArrowDropDownCircle",
  "ArrowDropUp",
  "ArrowForward",
  "ArrowForwardIos",
  "ArrowLeft",
  "ArrowOutward",
  "ArrowRight",
  "ArrowRightAlt",
  "ArrowUpward",
  "Article",
  "ArtTrack",
  "AspectRatio",
  "Assessment",
  "Assignment",
  "AssignmentAdd",
  "AssignmentInd",
  "AssignmentLate",
  "AssignmentReturn",
  "AssignmentReturned",
  "AssignmentTurnedIn",
  "Assistant",
  "AssistantDirection",
  "AssistantNavigation",
  "AssistantPhoto",
  "AssistWalker",
  "AssuredWorkload",
  "Atm",
  "AttachEmail",
  "AttachFile",
  "Attachment",
  "AttachMoney",
  "AutoAwesome",
  "AutoAwesomeMosaic",
  "AutoAwesomeMotion",
  "AutoDelete",
  "AutoFixHigh",
  "AutoFixNormal",
  "AutoFixOff",
  "AutoGraph",
  "AutoMode",
  "Autorenew",
  "AvTimer",
  "BabyChangingStation",
  "BackHand",
  "Backpack",
  "Backspace",
  "Backup",
  "BackupTable",
  "Badge",
  "BakeryDining",
  "Balance",
  "Balcony",
  "Ballot",
  "BarChart",
  "BatchPrediction",
  "Bathroom",
  "Bathtub",
  "Battery0Bar",
  "Battery1Bar",
  "Battery2Bar",
  "Battery3Bar",
  "Battery4Bar",
  "Battery5Bar",
  "Battery6Bar",
  "BatteryAlert",
  "BatteryChargingFull",
  "BatteryFull",
  "BatterySaver",
  "BatteryStd",
  "BatteryUnknown",
  "BeachAccess",
  "Bed",
  "BedroomBaby",
  "BedroomChild",
  "BedroomParent",
  "Bedtime",
  "BedtimeOff",
  "Beenhere",
  "Bento",
  "BikeScooter",
  "Biotech",
  "Blender",
  "Blind",
  "Blinds",
  "BlindsClosed",
  "Block",
  "Bloodtype",
  "Bluetooth",
  "BluetoothAudio",
  "BluetoothConnected",
  "BluetoothDisabled",
  "BluetoothDrive",
  "BluetoothSearching",
  "BlurCircular",
  "BlurLinear",
  "BlurOff",
  "BlurOn",
  "Bolt",
  "Book",
  "Bookmark",
  "BookmarkAdd",
  "BookmarkAdded",
  "BookmarkBorder",
  "BookmarkRemove",
  "Bookmarks",
  "BookOnline",
  "BorderAll",
  "BorderBottom",
  "BorderClear",
  "BorderColor",
  "BorderHorizontal",
  "BorderInner",
  "BorderLeft",
  "BorderOuter",
  "BorderRight",
  "BorderStyle",
  "BorderTop",
  "BorderVertical",
  "Boy",
  "BrandingWatermark",
  "BreakfastDining",
  "Brightness1",
  "Brightness2",
  "Brightness3",
  "Brightness4",
  "Brightness5",
  "Brightness6",
  "Brightness7",
  "BrightnessAuto",
  "BrightnessHigh",
  "BrightnessLow",
  "BrightnessMedium",
  "BroadcastOnHome",
  "BroadcastOnPersonal",
  "BrokenImage",
  "BrowseGallery",
  "BrowserNotSupported",
  "BrowserUpdated",
] as const;

const heavyCaseComponents = heavyIconNames.map((iconName, index) => {
  const Icon = iconLibrary[iconName] ?? Icons.HelpOutlined;
  const caseNumber = index + 101;

  function HeavyUpdateCase() {
    return (
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
          <Icon sx={{ color: "secondary.main" }} />
          <Typography sx={{ color: "text.secondary" }}>
            Stress case {caseNumber}: {iconName}
          </Typography>
        </Stack>
      </Paper>
    );
  }

  HeavyUpdateCase.displayName = `HeavyUpdateCase${caseNumber}`;
  return HeavyUpdateCase;
});

export default function HeavyUpdateCases() {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 1.5,
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, minmax(0, 1fr))",
          lg: "repeat(3, minmax(0, 1fr))",
        },
      }}
    >
      {heavyCaseComponents.map((HeavyUpdateCase) => (
        <HeavyUpdateCase key={HeavyUpdateCase.displayName} />
      ))}
    </Box>
  );
}
