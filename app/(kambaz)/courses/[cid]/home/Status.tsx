import { FaCheckCircle } from "react-icons/fa";
import {
  MdDoNotDisturbAlt,
  MdOutlineCloudUpload,
  MdOutlineCloudDownload,
  MdOutlineHome,
  MdOutlineRssFeed,
  MdOutlineCampaign,
  MdOutlineAnalytics,
  MdOutlineNotificationsNone,
} from "react-icons/md";

export default function CourseStatus() {
  const fullWidthBtn =
    "mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm";
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      <button type="button" className={fullWidthBtn}>
        <MdOutlineCloudUpload className="me-2 shrink-0 text-base" /> Import
        Existing Content
      </button>
      <button type="button" className={fullWidthBtn}>
        <MdOutlineCloudDownload className="me-2 shrink-0 text-base" /> Import
        from Commons
      </button>
      <button type="button" className={fullWidthBtn}>
        <MdOutlineHome className="me-2 shrink-0 text-base" /> Choose Home Page
      </button>
      <button type="button" className={fullWidthBtn}>
        <MdOutlineRssFeed className="me-2 shrink-0 text-base" /> View Course
        Stream
      </button>
      <button type="button" className={fullWidthBtn}>
        <MdOutlineCampaign className="me-2 shrink-0 text-base" /> New
        Announcement
      </button>
      <button type="button" className={fullWidthBtn}>
        <MdOutlineAnalytics className="me-2 shrink-0 text-base" /> New
        Analytics
      </button>
      <button type="button" className={fullWidthBtn}>
        <MdOutlineNotificationsNone className="me-2 shrink-0 text-base" /> View
        Course Notifications
      </button>
      <button
        id="wd-ai-status"
        type="button"
        className={fullWidthBtn}
      >
        <MdOutlineNotificationsNone className="me-2 shrink-0 text-base" /> Sample
        action
      </button>
    </div>
  );
}
