import { program360Content } from "./360-tattoo-training";
import { expertMentorContent } from "./expert-training-mentor";
import { safetyProtocolContent } from "./safety-first-protocol";
import { certifiedCoursesContent } from "./certified-courses";
import { internshipCareerContent } from "./internship-and-career-support";
import { easyFeePaymentContent } from "./easy-fee-payment";
import { lifetimeAccessibilityContent } from "./lifetime-accessibility";
import { liveRealSkinContent } from "./live-real-skin-training";
import { diplomaArtTattooContent } from "./diploma-art-tattoo";
import { advancedPiercingCourseContent } from "./advanced-piercing-course";
import { advancedSketchingDigitalDesignContent } from "./advanced-sketching-digital-design";

/** Slug → page content for /programs/[slug] */
export const programs = {
  "360-tattoo-training": program360Content,
  "expert-training-mentor": expertMentorContent,
  "safety-first-protocol": safetyProtocolContent,
  "certified-courses": certifiedCoursesContent,
  "internship-and-career-support": internshipCareerContent,
  "easy-fee-payment": easyFeePaymentContent,
  "lifetime-accessibility": lifetimeAccessibilityContent,
  "live-real-skin-training": liveRealSkinContent,
  "diploma-art-tattoo": diplomaArtTattooContent,
  "advanced-piercing-course": advancedPiercingCourseContent,
  "advanced-sketching-digital-design": advancedSketchingDigitalDesignContent,
};
