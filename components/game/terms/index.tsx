import styles from "./Terms.module.scss";
import dynamic from "next/dynamic";
import ReactMarkdown from "react-markdown";
import { TermsPropsType } from "./types";

const Button = dynamic(() => import("../../button"));
const Icon = dynamic(() => import("../../icon"));
const Checkbox = dynamic(() => import("../../checkbox"));

export default function Terms({
  display,
  terms,
  setTerms,
  setMainModal,
}: TermsPropsType) {
  return (
    <div className={`vAligned gap5 ${styles.terms}`}>
      {display && (
        <Checkbox
          id="terms"
          name="customStakeButton"
          value={terms.agreed}
          onClick={() => setTerms({ ...terms, agreed: !terms.agreed })}
        />
      )}
      <div
        className="vAligned gap5"
        onClick={() =>
          setMainModal(
            <div className="sqList">
              <h4>{terms.title}</h4>
              <ReactMarkdown>{terms.description as string}</ReactMarkdown>
              <div className={styles.disclaimer}>
                <p>
                  Please make sure you trust the creator of the game to settle
                  it accurately and fairly.
                </p>
                <p>
                  Please make sure any game you participate in is legal in your
                  region. Follow your local legal regulations at all times.
                </p>
              </div>
              {display && (
                <div className={styles.terms}>
                  <label
                    className="vAligned gap5 mb-med"
                    onClick={() => {
                      setTerms({ ...terms, agreed: !terms.agreed });
                      setMainModal("", false);
                    }}
                  >
                    <Checkbox id="termsModal" value={terms.agreed} />I accept
                    these Terms &amp; Conditions
                  </label>
                </div>
              )}
              <div className="flex centered">
                <Button onClick={() => setMainModal("", false)}>Close</Button>
              </div>
            </div>,
            true
          )
        }
      >
        <span>{`${display ? "I accept the " : ""}Terms & Conditions`}</span>{" "}
        <Icon cType="info" className="icon3" />
      </div>
    </div>
  );
}
