"use client";

import { Scale } from "lucide-react";
import { useState } from "react";

export default function Terms() {
  return (
    <main className="mt-20 mx-10">
      <section className="max-w-5xl mx-auto w-full pb-20 pt-20">
        <div className="flex flex-col py-6 rounded-3xl bg-loti-200 border transition-shadow duration-200 ease-linear border-loti-300 text-white gap-20">
          <div className="h-full flex flex-col justify-between">
            <div className="px-6">
              <div className="flex items-start justify-between gap-x-4">
                <div className="flex items-center gap-2">
                  <p className="text-xl font-semibold inline-flex items-center">
                    Terms and Conditions
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
                                href="https://r2.greed.best"
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
                      Please make sure to read and follow these Terms and
                      Conditions as any misconduct of these terms of service may
                      lead to a permanent ban from Greed (Bot) services or
                      goods.
                      <br />
                      <br />
                      These Legal Terms constitute a legally binding agreement
                      made between you, whether personally or on behalf of an
                      entity (&apos;you&apos;), and ERIS HOLDINGS LTD, concerning your
                      access to and use of the Services. You agree that by
                      accessing the Services, you have read, understood, and
                      agreed to be bound by all of these Legal Terms. IF YOU DO
                      NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE
                      EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST
                      DISCONTINUE USE IMMEDIATELY.
                      <br />
                      <br />
                      The Services are intended for users who are at least 13
                      years of age. All users who are minors in the jurisdiction
                      in which they reside (generally under the age of 18) must
                      have the permission of, and be directly supervised by,
                      their parent or guardian to use the Services. If you are a
                      minor, you must have your parent or guardian read and
                      agree to these Legal Terms prior to you using the
                      Services.
                      <br />
                      <br />
                      We recommend that you print a copy of these Legal Terms
                      for your records.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm tracking-wide text-loti-pink font-medium">
                    Purchases
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <p className="text-neutral-200 inline-block text-sm py-1">
                      If you wish to purchase any product or service made
                      available through the Service (&quot;Purchase&quot;), you may be
                      asked to supply certain information relevant to your
                      Purchase including, without limitation, your credit card
                      number, the expiration date of your credit card, your
                      billing address.
                      <br />
                      <br />
                      However it must be noted that all this information is
                      requested by our 3rd party payment gateway, Stripe.com.
                      You can check Stripe’s terms of service here{" "}
                      <a
                        href="https://stripe.com/legal"
                        className="text-blue-400"
                      >
                        https://stripe.com/legal
                      </a>
                      <br />
                      <br />
                      We accept the following payment methods that are paid with
                      using our payment gateway, Stripe:
                      <ol className="text-white list-disc list-inside pl-3">
                        <li>American Express</li>
                        <li>Visa</li>
                        <li>Mastercard</li>
                        <li>Discover</li>
                        <li>Paypal.com</li>
                        <li>Cash App</li>
                        <li>
                          if your payment service is not listed here, you may
                          contact us at{" "}
                          <a
                            className="text-blue-400"
                            href="https://discord.gg/greedbot"
                          >
                            https://discord.gg/greedbot
                          </a>
                        </li>
                      </ol>
                      <br />
                      You agree to provide current, complete, and accurate
                      purchase and account information for all purchases made
                      via the Services. You further agree to promptly update
                      account and payment information, including email address,
                      payment method, and payment card expiration date, so that
                      we can complete your transactions and contact you as
                      needed. Sales tax will be added to the price of purchases
                      as deemed required by us. We may change prices at any
                      time. All payments shall be in British Pounds, or United
                      States Dollars, or Euros.
                      <br />
                      <br />
                      You agree to pay all charges at the prices then in effect
                      for your purchases and any applicable shipping fees, and
                      you authorise us to charge your chosen payment provider
                      for any such amounts upon placing your order. If your
                      order is subject to recurring charges, then you consent to
                      our charging your payment method on a recurring basis
                      without requiring your prior approval for each recurring
                      charge, until such time as you cancel the applicable
                      order. We reserve the right to correct any errors or
                      mistakes in pricing, even if we have already requested or
                      received payment.
                      <br />
                      <br />
                      We reserve the right to refuse any order placed through
                      the Services. We may, in our sole discretion, limit or
                      cancel quantities purchased per person, per household, or
                      per order. These restrictions may include orders placed by
                      or under the same customer account, the same payment
                      method, and/or orders that use the same billing or
                      shipping address. We reserve the right to limit or
                      prohibit orders that, in our sole judgement, appear to be
                      placed by dealers, resellers, or distributors.
                      <br />
                      <br />
                      Greed (Bot) also reserves the right to pull any services
                      or goods at any time without reason or notice.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm tracking-wide text-loti-pink font-medium">
                    Refunds
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <p className="text-neutral-200 inline-block text-sm py-1">
                      All sales of goods or services provided by Greed (Bot) are
                      final and no refund will be issued for any reason.
                      <br />
                      <br />
                      <b>Chargebacks:</b> if under any circumstance a
                      charge-back has been issued Greed (Bot) reserves the right
                      to charge you the charge-back fees as well as a fee up to
                      200 USD research fee to cover all investigation expenses.
                      <br />
                      <br />
                      If this fee is not paid for, Greed (Bot) reserves the
                      right to cancel the charge-back.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm tracking-wide text-loti-pink font-medium">
                    Prohibited Activities
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <p className="text-neutral-200 inline-block text-sm py-1">
                      You may not access or use the Services for any purpose
                      other than that for which we make the Services available.
                      The Services may not be used in connection with any
                      commercial endeavours except those that are specifically
                      endorsed or approved by us.
                      <br />
                      <br />
                      As a user of the Services, you agree not to:
                      <ol className="text-white list-disc list-inside pl-3">
                        <li>
                          <b>Abuse of service:</b> you may not abuse any service
                          such as <b>Greed (Bot) API</b>
                        </li>
                        <li>
                          <b>Attempt to hack:</b> you may not attempt to hack{" "}
                          <b>Greed (Bot)</b> in any way
                        </li>
                        <li>
                          <b>Improper use:</b> you must use Greed (Bot) in a way
                          that follows applicable laws
                        </li>
                        <li>
                          <b>Engaging in automated:</b> you may not engage in
                          any automated use of systems, such as scripts that
                          have the purpose of attacking <b>Greed (Bot)</b> and
                          its other services in any way.
                        </li>
                        <li>
                          <b>Malicious behaviour</b> you are prohibited from
                          engaging in any form of malicious act with the purpose
                          of damaging our company, brand, and services (Greed
                          Bot, ERIS HOLDINGS LTD, etc). This includes but is not
                          limited to social engineering, hacking, botting, and
                          any other unauthorised activities that may compromise
                          our systems, data, or reputation, or result in
                          downtime. We take such actions very seriously, and
                          will take necessary legal measures to protect our
                          interests.
                        </li>
                      </ol>
                      <br />
                      The violation (by the User) of any of the terms listed
                      above may subsequently result in immediate and silent
                      termination of the User’s access to our services, with no
                      form of remuneration.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm tracking-wide text-loti-pink font-medium">
                    Privacy
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <p className="text-neutral-200 inline-block text-sm py-1">
                      We care about data privacy and security. Please review our
                      Privacy Policy:{" "}
                      <a href="/legal/privacy" className="text-blue-400">
                        https://greed.best/legal/privacy
                      </a>
                      . By using the Services, you agree to be bound by our
                      Privacy Policy, which is incorporated into these Legal
                      Terms. Please be advised the Services are hosted in the
                      United States and United Kingdom. If you access the
                      Services from any other region of the world with laws or
                      other requirements governing personal data collection,
                      use, or disclosure that differ from applicable laws in the
                      United States and United Kingdom, then through your
                      continued use of the Services, you are transferring your
                      data to the United States and United Kingdom, and you
                      expressly consent to have your data transferred to and
                      processed in the United States and United Kingdom.
                      <br />
                      <br />
                      Further, we do not knowingly accept, request, or solicit
                      information from children or knowingly market to children.
                      Therefore, in accordance with the U.S. Children&apos;s Online
                      Privacy Protection Act, if we receive actual knowledge
                      that anyone under the age of 13 has provided personal
                      information to us without the requisite and verifiable
                      parental consent, we will delete that information from the
                      Services as quickly as is reasonably practical.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm tracking-wide text-loti-pink font-medium">
                    Governing Law
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <p className="text-neutral-200 inline-block text-sm py-1">
                      These Legal Terms are governed by and interpreted
                      following the laws of England and Wales, and the use of
                      the United Nations Convention of Contracts for the
                      International Sales of Goods is expressly excluded. If
                      your habitual residence is in the EU, and you are a
                      consumer, you additionally possess the protection provided
                      to you by obligatory provisions of the law in your country
                      to residence. ERIS HOLDINGS LTD and yourself both agree to
                      submit to the non- exclusive jurisdiction of the courts of
                      England/and or Wales, which means that you may make a
                      claim to defend your consumer protection rights in regards
                      to these Legal Terms in England & Wales, or in the EU
                      country in which you reside.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm tracking-wide text-loti-pink font-medium">
                    Disclaimer
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <p className="text-neutral-200 inline-block text-sm py-1">
                      THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE
                      BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT
                      YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE
                      DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION
                      WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT
                      LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY,
                      FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE
                      MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY
                      OR COMPLETENESS OF THE SERVICES&apos; CONTENT OR THE CONTENT OF
                      ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES
                      AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY
                      (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND
                      MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY
                      NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE
                      OF THE SERVICES, (3) ANY UNAUTHORISED ACCESS TO OR USE OF
                      OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION
                      AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY
                      INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE
                      SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE
                      LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES
                      BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN
                      ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY
                      KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT
                      POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE
                      SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
                      RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR
                      OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY
                      HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION
                      FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL
                      NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR
                      MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY
                      PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF
                      A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY
                      ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGEMENT AND
                      EXERCISE CAUTION WHERE APPROPRIATE.
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
