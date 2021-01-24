import { MemberProfile } from "./MemberProfile";
import classnames from "classnames";
import styles from "./MemberProfile.module.css";

export const MemberProfiles = ({ members }, idx) => {
  return (
    <div
      className={classnames(
        "grid md:grid-cols-2 lg:grid-cols-3 gap-12",
        styles.grid
      )}
    >
      {members.map((member, idx) => (
        <div className="">
          <MemberProfile {...member} />
        </div>
      ))}
    </div>
  );
};
