"use client";

import { Scale } from "lucide-react";
import { useState } from "react";

export default function Privacy() {
  return (
    <main className="mt-20 mx-10">
      <section className="max-w-5xl mx-auto w-full pb-20 pt-20">
        <div className="flex flex-col py-6 rounded-3xl bg-loti-200 border transition-shadow duration-200 ease-linear border-loti-300 text-white gap-20">
          <div className="h-full flex flex-col justify-between">
            <div className="px-6">
              <div className="flex items-start justify-between gap-x-4">
                <div className="flex items-center gap-2">
                  <p className="text-xl font-semibold inline-flex items-center">
                    Privacy Policy
                  </p>
                </div>
              </div>
              <p className="text-sm mt-3 text-neutral-400 font-medium pr-4">
                By using any of our services, you automatically agree to the
                terms and privacy policies listed below as well as any other
                legal documents that may be posted on this website. We are not
                required to notify you of changes to any documents, so please
                make sure to check this website frequently. If you have any
                concerns or requests, feel free to reach out to us via{" "}
                <a href="https://discord.gg/greedbot" className="text-blue-400">
                  our support server
                </a>{" "}
                and open a ticket.
                <br /> <br />
                Date created: 23rd of May 2024
                <br />
                Date revised: 23rd of May 2024
              </p>
            </div>
            <div>
              <hr className="border-t border-loti-300 w-full my-4" />
              <div className="px-6 flex flex-col gap-4">
                <div>
                  <p className="text-sm tracking-wide text-loti-pink font-medium">
                    Introduction
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <p className="text-neutral-200 inline-block text-sm py-1">
                      <i>
                        Throughout these terms of service, the terms “Us”, “We”,
                        “Our”, or “Company” refer to the Greed (Bot) or the
                        company providing these terms of service (Greed). The
                        terms “You” “Your”, “User”, or “Users” refer to the
                        individuals using our services (discord bot, etc) or
                        visiting our websites.
                      </i>
                      <br />
                      <br />
                      Thank you for choosing Greed (Bot). These Terms and
                      Conditions have been created with the intent to define the
                      terms that you must follow. If you have any questions or
                      concerns about these terms of service please contact
                      through the any of following means:
                      <br />
                      <br />
                      <ol className="pl-3">
                        <li className="text-white list-disc list-inside">
                          <a
                            href="https://discord.gg/greedbot"
                            className="text-blue-400"
                            target="_blank"
                          >
                            https://discord.gg/greedbot
                          </a>
                        </li>
                      </ol>
                      <br />
                      Greed (Bot) is an official division of ERIS HOLDINGS LTD
                      with the registration situation of England & Wales, United
                      Kingdom, company no. 15684441 with an official registered
                      office of 2nd Floor College House, 17 King Edwards Road,
                      Ruislip, London, United Kingdom, HA4 7AE. The services &
                      goods provided are all provided by ERIS HOLDINGS LTD.
                      <br />
                      <br />
                      ERIS HOLDINGS LTD reserves the right to change or modify
                      these terms and policies at any time, with or without
                      notice. Changes made to terms and policies are effective
                      immediately and shall be followed by you if you are using
                      any of Greed (Bot) services or goods.
                      <br />
                      <br />
                      <ol className="pl-3">
                        <li className="text-white list-disc list-inside">
                          Greed discord bot
                        </li>
                        <li className="text-white list-disc list-inside">
                          Greed&apos;s websites
                          <ul className="list-disc list-inside pl-5">
                            <li>
                              <a
                                href="https://greed.best"
                                className="text-blue-400"
                                target="_blank"
                              >
                                https://greed.best
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://r2.Greed.best"
                                className="text-blue-400"
                                target="_blank"
                              >
                                https://r2.greed.best
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="text-white list-disc list-inside">
                          Engage with us in other related ways such as: sales,
                          marketing, and events
                        </li>
                      </ol>
                      <br />
                      Please make sure to read the privacy policy carefully as
                      it will help you understand what data we collect, as well
                      as the right to control your data.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm tracking-wide text-loti-pink font-medium">
                    What information does Greed (Bot) collect from you? as a
                    user:
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <p className="text-neutral-200 inline-block text-sm py-1">
                      Greed (Bot) is a discord bot that requires information to
                      be taken, and in some cases stored to operate as expected,
                      some of these include, but not limited to:
                      <br />
                      <ol className="text-white list-disc list-inside pl-3">
                        <li>
                          <b>Your discord ID:</b> used to identify the user as
                          well as store data under that ID
                        </li>
                        <li>
                          <b>Birthday:</b> this is collected by a voluntarily
                          command, user can set as well as delete that data from
                          being stored in Greed completely
                        </li>
                        <li>
                          <b>Timezone:</b> this is collected by a voluntarily
                          command, user can set as well as delete that data from
                          being stored in Greed completely
                        </li>
                        <li>
                          <b>Bio (biography):</b> this is collected by a
                          voluntarily command, user can set as well as delete
                          that data from being stored in Greed completely
                        </li>
                        <li>
                          <b>AFK:</b> this is collected by a voluntarily
                          command, this includes the reason (or automatically
                          set to “AFK”) & the time the command was ran; user can
                          set, when a new message is received by that user the
                          Afk data is deleted from Greed&apos;s storage completely
                        </li>
                      </ol>
                      <br />
                      These are only a few instances of the information we
                      gather from you as a user; as Greed is a multifunctional
                      bot with more than 500 commands and growing, we are unable
                      to show you all the information we gather. Please contact
                      us{" "}
                      <a
                        href="https://discord.gg/greedbot"
                        className="text-blue-400"
                      >
                        via discord{" "}
                      </a>
                      if you have any queries.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm tracking-wide text-loti-pink font-medium">
                    What information does Greed (Bot) collect from a guild?
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <p className="text-neutral-200 inline-block text-sm py-1">
                      Greed (Bot) also requires information from the specific
                      guild it is in to operate as expected & provide the best
                      experience possible. Some of these include, but not
                      limited to:
                      <br />
                      <ol className="text-white list-disc list-inside pl-3">
                        <li>
                          <b>Guild ID:</b> used to identify the guild as well as
                          store guild data under that ID.
                        </li>
                        <li>
                          <b>Prefix:</b> this is collected when executing a
                          voluntary command by server administrators, and can be
                          reset at will to the default command prefix (currently
                          “,”)..
                        </li>
                        <li>
                          <b>Autoroles:</b> this is collected by a voluntarily
                          command by server administrators and can be used to
                          provide the autorole services, can be disabled,
                          enabled, or deleted from Greed&apos;s storage completely
                          (multiple autorole objects can be stored, depending on
                          how many autoroles are set by administrators). Object
                          stored data:
                          <ul className="text-white list-disc list-inside pl-6">
                            <li>
                              <b>Role ID:</b> the role that is set for the
                              autorole.
                            </li>
                            <li>
                              <b>Status:</b> whether that autorole is disabled
                              or enabled.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>Starboards:</b> this is collected by a voluntarily
                          command by server administrators and can be used to
                          provide the starboard services, can be disabled,
                          enabled or deleted from Greed&apos;s storage completely
                          (once 200 message IDs have been collected, data is
                          automatically deleted). Object stored data:
                          <ul className="text-white list-disc list-inside pl-6">
                            <li>
                              <b>Channel ID:</b> the channel the starboard will
                              be sent to.
                            </li>
                            <li>
                              <b>Emoji:</b>
                              the emoji used for the starboard (stored as
                              unicode).
                            </li>
                            <li>
                              <b>Threshold:</b> the quantity of reactions
                              (reaction type defined by Emoji field) required
                              for the message to be sent to the starboard
                              channel (defined by Channel ID field).
                            </li>
                            <li>
                              <b>Status:</b> whether that autorole is disabled
                              or enabled.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>Paid:</b> this is a command that is run by bot
                          admins that confirms that this guild is a paid guild
                          and can use Greed (bot) services.
                        </li>
                        <li>
                          <b>Snipe:</b> this is data that is stored
                          automatically when a message has been deleted (can be
                          deleted by the clearsnipe command). Object stored
                          data:
                          <ol className="text-white list-disc list-inside pl-6">
                            <li>
                              <b>Message ID:</b> the ID of the deleted message.
                            </li>
                            <li>
                              <b>Channel ID:</b> the ID of the channel the
                              message was deleted in.
                            </li>
                            <li>
                              <b>User data:</b> the username and the icon url of
                              the message sender.
                            </li>
                            <li>
                              {" "}
                              <b>Message content:</b> the content of the deleted
                              message.
                            </li>
                            <li>
                              <b>Deleted timestamp:</b> the timestamp of the
                              deleted message.
                            </li>
                            <li>
                              <b>Delete in:</b> the time the snipe should be
                              automatically deleted from Greed&apos;s storage (48
                              hours after snipe has been stored).
                            </li>
                          </ol>
                        </li>
                        <li>
                          <b>Count:</b> this is data that is stored by a server
                          administrator (can be deleted by the count deleteall
                          command). Object stored data:
                          <ol className="text-white list-disc list-inside pl-6">
                            <li>
                              <b>Type:</b> the type of voice chanenl, for
                              example total member count, bot count, etc...
                            </li>
                            <li>
                              <b>Voice channel ID:</b> the id of the voice
                              channel that was created, this is used so that it
                              can edit it in 3 minutes with the new count as
                              well as delete the channel if the delete command
                              was used.
                            </li>
                            <li>
                              <b>Enabled:</b> a boolean value that is either
                              true or false, if disabled it does not update the
                              channel name.
                            </li>
                          </ol>
                        </li>
                      </ol>
                      <br />
                      These are only a few instances of the information we
                      gather from you as a guild; as Greed is a multifunctional
                      bot with more than 500 commands and growing, we are unable
                      to show you all the information we gather. Please contact
                      us{" "}
                      <a
                        href="https://discord.gg/greedbot"
                        className="text-blue-400"
                      >
                        via discord{" "}
                      </a>
                      if you have any queries.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm tracking-wide text-loti-pink font-medium">
                    What other information does Greed (Bot) collect?
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <p className="text-neutral-200 inline-block text-sm py-1">
                      Greed (Bot) collects various types of data, which may be
                      defined by various models provided by the Discord API
                      (current: v10). We hold the utmost respect for user
                      privacy, but data collection is a necessary aspect of
                      providing you, the end user, with the best possible
                      service. The following list includes all forms of data
                      collected by our Discord Bot, however, please note that
                      this is subject to change at any given time.
                      <ul className="text-white list-disc list-inside pl-3">
                        <li>
                          <b>Blacklist from Greed:</b> if blacklisted from Greed
                          by bot admins, Greed stores the user id of the
                          blacklisted user as well as the reason provided by the
                          bot admins
                        </li>
                        <li>
                          <b>Paid sheet:</b> Greed has a sheet that includes the
                          paid members ids to keep track of payments
                        </li>
                        <li>
                          <b>Payment email:</b> Greed gets the email used when
                          paying for <b>Greed Paid</b> to send updates to
                          services as well as invoices
                        </li>
                        <li>
                          <b>Email address:</b> Greed gets the email address
                          used when paying for <b>Greed Paid</b> to send updates
                          to services as well as invoices
                        </li>
                      </ul>
                      <br />
                      All payment data is processed and handled by a third-party
                      application, Stripe for more information about Stripe’s
                      privacy policy check{" "}
                      <a
                        href="https://stripe.com/privacy"
                        className="text-blue-400"
                      >
                        https://stripe.com/privacy
                      </a>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm tracking-wide text-loti-pink font-medium">
                    How do we use the information received?
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <p className="text-neutral-200 inline-block text-sm py-1">
                      We use personal information collected via our Website for
                      a variety of business purposes described below. We process
                      your personal information for these purposes in reliance
                      on our legitimate business interests, in order to enter
                      into or perform a contract with you, with your consent,
                      and/or for compliance with our legal obligations. We
                      indicate the specific processing grounds we rely on next
                      to each purpose listed below.
                      <br />
                      <br />
                      Greed (Bot) uses the collected data to finish processes
                      and run commands such as starboard which requires the
                      starboard data to function properly.
                      <br />
                      <ol className="text-white list-disc list-inside pl-3">
                        <li>
                          <b>Complete a bots task:</b> some commands in Greed
                          rely on data that is stored, or set by Greed&apos;s users
                          and consumers, such as:
                          <ol className="text-white list-disc list-inside pl-6">
                            <li>
                              <b>Starboard:</b> Greed requires the starboard
                              data, such as channel id, emoji, and threshold for
                              the starboard command to properly work
                            </li>
                            <li>
                              <b>Autorole:</b> Greed requires the autorole data,
                              such as the role for the autorole function and
                              command to properly work
                            </li>
                          </ol>
                        </li>
                        <li>
                          <b>Feedback and errors:</b> Greed stores all the
                          errors for debugging reasons, which may include, but
                          not limited to:
                          <ol className="text-white list-disc list-inside pl-6">
                            <li>
                              <b>Channel ID</b>
                            </li>
                            <li>
                              <b>Message ID</b>
                            </li>
                            <li>
                              <b>Message Author</b>
                            </li>
                            <li>
                              <b>etc...</b>
                            </li>
                          </ol>
                        </li>
                        <li>
                          <b>Bot presence:</b> the presence of Greed includes
                          the no. of guilds Greed is in
                        </li>
                      </ol>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm tracking-wide text-loti-pink font-medium">
                    Will your information be shared with anyone?
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <p className="text-neutral-200 inline-block text-sm py-1">
                      Greed does not share the information collected or
                      received, however there are some acceptable cases, some of
                      them include, but not limited to:
                      <br />
                      <ol className="text-white list-disc list-inside pl-3">
                        <li>
                          <b>Consent:</b> we may process your data only if you
                          have given us the consent to use your personal
                          information for a specific reason
                        </li>
                        <li>
                          <b>Legitimate Interests:</b> we may be required to
                          process your data when it is reasonably necessary to
                          achieve our legitimate business interests
                        </li>
                        <li>
                          <b>Performance of a contract:</b> where we have
                          entered into a contract with you, we may process your
                          personal information to fulfil the terms of our
                          contract
                        </li>
                        <li>
                          <b>Legal Obligations:</b> we may disclose your
                          information where we are legally required to do so in
                          order to comply with applicable law, governmental
                          requests, a judicial proceeding, court order, or legal
                          process, such as in response to a court order or a
                          subpoena (including in response to public authorities
                          to meet national security or law enforcement
                          requirements)
                        </li>
                        <li>
                          <b>Vital Interest:</b> we may disclose your
                          information where we believe it is necessary to
                          investigate, prevent, or take action regarding
                          potential violations of our policies, suspected fraud,
                          situations involving potential threats to the safety
                          of any person and illegal activities, or as evidence
                          in litigation in which we are involved.
                        </li>
                      </ol>
                      <br />
                      More specifically, we may need to process your data or
                      share your personal information in the following
                      situations:
                      <br />
                      <ol className="text-white list-disc list-inside pl-3">
                        <li>
                          <b>Business Transfers:</b> we may share/or transfer
                          your information with, or during negotiations of, any
                          merger (merging with other companies), sale of company
                          assets, financing, or acquisition of all or a portion
                          of our business to another company.
                        </li>
                      </ol>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm tracking-wide text-loti-pink font-medium">
                    How do we keep your information safe?
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <p className="text-neutral-200 inline-block text-sm py-1">
                      We have implemented appropriate technical and
                      organisational security measures designed to protect the
                      security of any personal information we process. However,
                      despite our safeguards and efforts to secure your
                      information, no electronic transmission over the Internet
                      or information storage technology can be guaranteed to be
                      100% secure, so we cannot promise or guarantee that
                      hackers, cybercriminals, or other unauthorised third
                      parties will not be able to defeat our security, and
                      improperly collect, access, steal, or modify your
                      information. Although we will do our best to protect your
                      personal information, transmission of personal information
                      to and from our Website is at your own risk. You should
                      only access the Website within a secure environment.
                      <br />
                      <br />
                      It is impossible to guarantee that the data stored will be
                      100% secure, but we do our best to make sure that, no
                      matter what, the data is always secure and accessible only
                      to the appropriate individuals, such as:
                      <ol className="text-white list-disc list-inside pl-3">
                        <li>Bot Developers</li>
                        <li>Bot Owners</li>
                      </ol>
                      <br />
                      <br />
                      <p className="text-white">
                        The data is only visible to Bot Developers & Bot Owners
                        if it is necessary for uses such as:
                      </p>
                      <ol className="text-white list-disc list-inside pl-3">
                        <li>
                          <b>Testing</b>
                        </li>
                        <li>
                          <b>
                            or any “Will your information be shared with
                            anyone?” points.
                          </b>
                        </li>
                      </ol>
                      <br />
                      If you however have any security question or concern, do
                      not hesitate to reach out:
                      <br />
                      <ol className="pl-3">
                        <li className="text-white list-disc list-inside">
                          <a
                            href="https://discord.gg/greedbot"
                            className="text-blue-400"
                            target="_blank"
                          >
                            https://discord.gg/greedbot
                          </a>
                        </li>
                      </ol>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm tracking-wide text-loti-pink font-medium">
                    What are your privacy rights?
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <p className="text-neutral-200 inline-block text-sm py-1">
                      <b>
                        EEA: European Economic Area
                        <br />
                        UK: United Kingdom
                      </b>
                      <br />
                      <br />
                      In some regions (like the EEA and UK), you have certain
                      rights under applicable data protection laws. These may
                      include the right (i) to request access and obtain a copy
                      of your personal information, (ii) to request
                      rectification or erasure; (iii) to restrict the processing
                      of your personal information; and (iv) if applicable, to
                      data portability. In certain circumstances, you may also
                      have the right to object to the processing of your
                      personal information. To make such a request, please use
                      the contact details provided below. We will consider and
                      act upon any request in accordance with applicable data
                      protection laws.
                      <br />
                      <br />
                      If we are relying on your consent to process your personal
                      information, you have the right to withdraw your consent
                      at any time. Please note however that this will not affect
                      the lawfulness of the processing before its withdrawal,
                      nor will it affect the processing of your personal
                      information conducted in reliance on lawful processing
                      grounds other than consent.
                      <br />
                      <br />
                      If you are a resident in the EEA or UK and you believe we
                      are unlawfully processing your personal information, you
                      also have the right to complain to your local data
                      protection supervisory authority. You can find their
                      contact details here:{" "}
                      <a
                        href="https://commission.europa.eu/law/law-topic/data-protection/data-protection-eu_en"
                        className="text-blue-400"
                      >
                        https://commission.europa.eu/law/law-topic/data-protection/data-protection-eu_en
                      </a>
                      <br />
                      <br />
                      If you are a resident in Switzerland, the contact details
                      for the data protection authorities are available here:{" "}
                      <a
                        href="https://www.edoeb.admin.ch/edoeb/en/home.html"
                        className="text-blue-400"
                      >
                        https://www.edoeb.admin.ch/edoeb/en/home.html
                      </a>
                      <br />
                      <br />
                      <b>Account information:</b> if you’d like to review your
                      account information or terminate or delete your account
                      data from Greed, you can contact us at:
                      <ol className="pl-3">
                        <li className="text-white list-disc list-inside">
                          <a
                            href="https://discord.gg/greedbot"
                            className="text-blue-400"
                            target="_blank"
                          >
                            https://discord.gg/greedbot
                          </a>
                        </li>
                      </ol>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm tracking-wide text-loti-pink font-medium">
                    How can you delete the data we collect?
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <p className="text-neutral-200 inline-block text-sm py-1">
                      Based on the applicable laws of your country, you may have
                      the right to request access to the personal information we
                      collect from you, change that information, or delete it in
                      some circumstances. To request to review, update, or
                      delete your personal information, please contact through
                      the any of following means:
                      <br />
                      <ol className="pl-3">
                        <li className="text-white list-disc list-inside">
                          <a
                            href="https://discord.gg/greedbot"
                            className="text-blue-400"
                            target="_blank"
                          >
                            https://discord.gg/greedbot
                          </a>
                        </li>
                      </ol>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
