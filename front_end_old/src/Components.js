// common
import ExternalLink from "components/common/ExternalLink";
import YouTubeDescription from "components/common/YouTubeDescription";
import YouTubeImage from "components/common/YouTubeImage/YouTubeImage";
import YouTubeLocation from "components/common/YouTubeLocation";
import YouTubeRedirectLink from "components/common/YouTubeRedirectLink";
import YouTubeTitle from "components/common/YouTubeTitle";
import YouTubeVideo from "components/common/YouTubeVideo";
import ExternalLinkWithIcon from "components/common/ExternalLinkWithIcon";

// About Me
import AboutMe from "components/aboutMe/AboutMe";
import AcademicPapers from "components/aboutMe/AcademicPapers";
import Qualifications from "components/aboutMe/qualifications_section/Qualifications";
import Projects from "components/aboutMe/projects_section/Projects";
import Education from "components/aboutMe/Education";
import WorkExperience from "components/aboutMe/work_experience_section/WorkExperience";
import SkillsSection from "components/aboutMe/skills_section/SkillsSection";
import AboutMeHeader from "components/aboutMe/about_me_header/AboutMeHeader";
import SpatiumExplorationis from "components/aboutMe/projects_section/SpatiumExplorationis";
import Qualifcation from "components/aboutMe/qualifications_section/Qualifcation";
import CustomPieChart from "components/aboutMe/skills_section/custom_pie_chart/CustomPieChart";
import SectionHeader from "components/aboutMe/SectionHeader";
import SectionAccordion from "components/aboutMe/section_accordion/SectionAccordion";

// icons
import AboutMeIcon from "components/icons/AboutMeIcon";
import DarkModeIcon from "components/icons/DarkModeIcon";
import EpisodeIcon from "components/icons/EpisodeIcon";
import FlameIcon from "components/icons/FlameIcon";
import GithubIcon from "components/icons/GithubIcon";
import LightModeIcon from "components/icons/LightModeIcon";
import LinkedinIcon from "components/icons/LinkedinIcon";
import MotoIcon from "components/icons/MotoIcon";
import PinPointIcon from "components/icons/PinPointIcon";
import ResumeIcon from "components/icons/ResumeIcon";
import SubtitleIcon from "components/icons/SubtitleIcon";
import YouTubeDescriptionIcon from "components/icons/YouTubeDescriptionIcon";
import YouTubeIcon from "components/icons/YouTubeIcon";

// latest
import Latest from "components/latest/Latest";
import YouTubeLatest from "components/latest/youtube/YouTubeLatest";

// main - header
import DLSwitch from "components/main/header_section/dark_light_toggle_switch/DLSwitch";
import Header from "components/main/header_section/header/Header";
import Subtitle from "components/main/header_section/subtitle/Subtitle";
import Title from "components/main/header_section/title/Title";
import VersionSection from "components/main/version_section/VersionSection";

// main - navigationBar
import NavigationBar from "components/main/navBar/navigationBar/NavigationBar";
import NavigationItem from "components/main/navBar/NavigationItem";

// moto
import Moto from "components/moto/Moto";

// mock
import mockData from "MockData";

// resources
import STRINGS from "Strings";

// API
import ErrorDataView from "components/APIResponseView/ErrorDataView";
import LoadingDataView from "components/APIResponseView/LoadingDataView";
import NoDataAvailableView from "components/APIResponseView/NoDataAvailableView";

// pages
import LoginPage from "pages/LoginPage";
import UserPage from "pages/UserPage";

// login form
import LoginForm from "components/login_form/LoginForm";

export {
    // common 
    ExternalLink,
    ExternalLinkWithIcon,
    YouTubeDescription,
    YouTubeImage,
    YouTubeLocation,
    YouTubeRedirectLink,
    YouTubeTitle,
    YouTubeVideo,

    // aboutMe
    AboutMe,
    AcademicPapers,
    Qualifications,
    Projects,
    Education,
    WorkExperience,
    SkillsSection as Skills,
    AboutMeHeader,
    SpatiumExplorationis,
    Qualifcation,
    CustomPieChart,
    SectionHeader,
    SectionAccordion,

    //icons
    AboutMeIcon,
    DarkModeIcon,
    EpisodeIcon,
    FlameIcon,
    LightModeIcon,
    MotoIcon,
    PinPointIcon,
    SubtitleIcon,
    YouTubeDescriptionIcon,
    YouTubeIcon,
    ResumeIcon,
    GithubIcon,
    LinkedinIcon,

    // latest
    Latest,
    YouTubeLatest,

    // main - header
    DLSwitch,
    Header,
    Subtitle,
    Title,

    // main - navigationBar
    NavigationBar,
    NavigationItem,

    // main - version section
    VersionSection,

    // moto
    Moto,

    // mock 
    mockData,

    // resources
    STRINGS,

    // API
    ErrorDataView,
    LoadingDataView,
    NoDataAvailableView,

    // pages
    UserPage,
    LoginPage,

    // login form
    LoginForm,
}