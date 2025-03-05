## 10.81.0 (04.03.2025)

### Added
- Introduced Claim status tracking.

### Changed
- Updated nova-two-factor.
- Updated nova-tiptap.
- Removed nova-kit/nova-packages-tool.
- Removed Duplicate and replaced it with DuplicateToolkit.
- Removed mdixon18/fontawesome.
- Removed Indicator and replaced it with NovaFieldIndicator.
- General refactoring.

### Wip
- Work in progress.

## 10.80.0 (03.03.2025)

### Added
- Introduced NovaFieldJson.
- Introduced NovaAjaxSelect.
- Introduced NovaHtmlCard.
- Introduced NovaCardMap.

### Changed
- Updated NovaSpatiePermissions.
- Removed GoogleTranslate and replaced it with GoogleTranslateToolkit.
- Disabled serviceInfocarInvoicesToCustomers.
- Removed AjaxSelect and replaced it with NovaAjaxSelect.
- Removed HtmlCard and replaced it with NovaHtmlCard.
- Removed Nova4CardMap and replaced it with NovaCardMap.

### Fixed
- Minor typo fixes.

## 10.79.0 (02.03.2025)

### Added
- Introduced UnsplashToolkit.
- Composer update.

### Changed
- Replaced Nova4FieldMap with NovaFieldMap.
- Removed PasswordService and introduced PasswordToolkit.

## 10.78.0 (28.02.2025)

### Added
- Introduced claim notification system.

### Changed
- Moved claim notification handling to a dedicated trait.
- General refactoring.

## 10.77.0 (26.02.2025)

### Added
- Introduced SupplierCompetence model.

## 10.76.0 (25.02.2025)

### Changed
- Updated Composer dependencies.
- Refactored app helpers.

### Added
- Integrated Laravel Toolkit package.

## 10.75.0 (24.02.2025)

### Changed
- Cleaned up unused packages.

### Fixed
- Resolved vehicle relationship existence bug.
- Fixed `RegenerateSellerUserPassword` permissions action.

## 10.74.0 (21.02.2025)

### Added
- Introduced StorageService and refactored PDF service generation.

### Changed
- Minor typo corrections.

### Fixed
- Resolved bug in StorageService.
- Fixed issue in SimulationPdfs.


## 10.73.0 (19.02.2025)

### Added
- Introduced minimum price handling in Rate Update Sogessur Cvt calculation engine.

### Changed
- Moved deleteQuotationsWithoutPrices to DealerClickCalculationEngine.

### Fixed
- Resolved bug in SendQuotationContractDealerMailJob.

## 10.72.0 (17.02.2025)

### Added
- Introduced QuotationChangeSeller action for saved quotations.

## 10.71.0 (14.02.2025)

### Added
- Integrated collect_118 into Nova supplier.

### Fixed
- Resolved issue on defined issuer Allegato 4.
- Corrected DealerFees calculation for a defined issuer.

### Changed
- Refactored Allegato 4.

## 10.70.0 (13.02.2025)

### Added
- Implemented collect_118 and isCollectable logic.

### Wip
- Ongoing developments and improvements.

## 10.69.0 (11.02.2025)

### Added
- Introduced DealerMacroInternalGroups to claim management.
- Added Infodrive invoices options.
- Implemented see menu products policy.
- Added dealer claims office user role.

### Wip
- Ongoing developments and improvements.

## 10.68.0 (10.02.2025)

### Added
- Implemented price rounding system on IBAR frontend.

### Changed
- Updated roundUpToMultiple to use ceil instead of round.

### Fixed
- Resolved bug in syncSalesForceCommissionsConfirmed.

## 10.67.0 (10.02.2025)

### Added
- Introduced QuotationSyncSalesForceCommissions action.
- Added DealerMacroInternalGroupByIds filter.

### Updated
- Updated DealerFees calculations for improved accuracy.

## 10.66.0 (08.02.2025)

### Added
- Introduced News Feeds on Nova main Dashboard.
- Added NewsAnsaMotori, NewsIlsole24oreMotori, NewsCorriereMotori, NewsAffariitalianiMotori, NewsMotoriitMotori, and NewsAlVolante to News Feeds.

## 10.65.0 (07.02.2025)

### Changed
- Horizon tuned for optimized performance.

## 10.64.0 (06.02.2025)

### Added
- Added ProductsTagsMultiSelect filter to Nova product.
- Added Sogessur Cvt.

### Wip
- Ongoing developments in progress.

## 10.63.0 (05.02.2025)

### Added
- Added hasSatelliteCoverages attribute to SimulationBooleans.

### Wip
- Ongoing developments in progress.

## 10.62.0 (04.02.2025)

### Added
- Added deleteOldSnapshots event on simulation state transitions.

### Changed
- Sorted tag list in DealersTagsMultiSelect.

### Wip
- Ongoing developments in progress.

## 10.61.0 (03.02.2025)

### Changed
- UserRelatedScope updated.

### Wip
- Ongoing developments in progress.

## 10.60.0 (02.02.2025)

### Added
- MOL attributes introduced on QuotationSegnaller.

### Changed
- Google Sheets contract register updated for a defined issuer.

## 10.59.0 (31.01.2025)

### Added
- segnaller_id attribute introduced to DealersUser.
- QuotationClaimsGuidePdfRecreate Nova action added to WorkableDoneQuotations.
- bookingSignableDossierRecreate method implemented to handle errors on You Sign booking dossier creation.

### Wip
- Work in progress on segnaller view on frontend.

## 10.58.0 (30.01.2025)

### Added
- On MOL segnaller costs handler implemented.
- SystemShowDealerUpdateStatus settings option added.
- is_updated_ready attribute introduced on Dealer.

## 10.57.0 (29.01.2025)

### Added
- DealerMacroInternalGroups filter added to Dealer, DealerComplete, and DealerKpi.

### Wip
- Ongoing updates and development tasks.

## 10.56.0 (28.01.2025)

### Changed
- Refactoring for improved code structure and maintainability.
- Updated "Ask for Information" modal with enhanced functionality.

### Wip
- Ongoing updates and development tasks.

## 10.55.0 (27.01.2025)

### Added
- Add cache to handle simulationsNewestRealCustomers, withContractsByRegionsDataFiltered, and withContractsByProvincesDataFiltered for improved performance.

### Changed
- Update debit note for a specific issuer to reflect new conditions.

### Fixed
- Fixed new rate system for Covea CVT.

## 10.54.0 (26.01.2025)

### Changed
- Debit note update for defined issuer: refined the debit note process to accommodate specific issuer requirements.

## 10.53.0 (24.01.2025)

### Added
- Handled too low IBAR value: implemented a system to manage scenarios with low IBAR values.
- Add IBAR value too low error message: introduced a descriptive error message for low IBAR values.

### Changed
- Suspended edit on calculateEllegiDealerProductsCommissionsValue: paused updates on the method for further evaluation.

### Wip
- Various ongoing updates.

## 10.52.0 (17.01.2025)

### Changed
- Complete refactoring of GoogleSheetsSynchronizer: overhauled the GoogleSheetsSynchronizer to enhance performance and maintainability.

## 10.51.0 (09.01.2025)

### Added
- InternalGroupName to DealerAccountingAssiclick and DealerAccountingEllegi: introduced the internalGroupName attribute for improved data organization.

### Wip
- Ongoing development tasks.

## 10.50.0 (08.01.2025)

### Fixed
- Bug on DealerCollections: resolved an issue affecting DealerCollections functionality.

## 10.49.0 (07.01.2025)

### Added
- Colors for 2025 quotations data: introduced a color-coded system for 2025 quotations to enhance data visualization.

## 10.48.0 (02.01.2025)

### Added
- Under-observation-warning alert to quotations: introduced an alert for quotations marked under observation.

### Changed
- 2025 Google Sheets updated: refreshed and aligned Google Sheets for the new year.
- Updated defaultExpirationDate: revised the default expiration date for improved accuracy.

## 10.47.0 (24.12.2024)

### Changed
- Missing remissions segnallers mails refactored: improved the handling of emails for missing remissions related to segnallers.

## 10.46.0 (21.12.2024)

### Changed
- Set dealerClickChristmas opening hours: configured Christmas opening hours for DealerClick.

## 10.45.0 (18.12.2024)

### Changed
- Services and insurance dealer commissions partition refactored: improved the handling and structure of dealer commissions for services and insurance.

## 10.44.0 (17.12.2024)

### Changed
- Remove configurations menu to segnallers: adjusted the interface to exclude the configurations menu for segnallers.
- DealerAnalysis refactored: improved and optimized the DealerAnalysis functionality for better performance and maintainability.

### Wip
- Continued development on ongoing tasks and features.

## 10.43.0 (16.12.2024)

### Added
- Add DealerKpi model and Nova resource: implemented the DealerKpi model along with its corresponding Nova resource for managing dealer performance indicators.

### Changed
- Work in progress on additional features for DealerKpi functionality.

## 10.42.0 (15.12.2024)

### Added
- Add contracts by regions and provinces counting system: introduced a system to count contracts categorized by regions and provinces for enhanced reporting and analytics.

## 10.41.0 (12.12.2024)

### Changed
- Changelog cleanup: improved the clarity and organization of the changelog.
- Updated coroowicaksono/chart-js-integration: integrated the latest updates for chart-js functionality.

### Fixed
- Fixed DealerCardInfo bug: resolved an issue affecting the DealerCardInfo display.

## 10.40.0 (11.12.2024)

### Added
- Add Segnallers map: introduced a map to visualize Segnallers locations.
- Add new dealers dashboard maps: added enhanced dashboard maps for dealers.
- Add geo coordinates to Segnaller: enabled geo-coordinates functionality for Segnallers.

### Changed
- Updated SegnallersObserver: refined observer behavior for Segnallers.
- Updated DealerOfficeObserver: improved observer handling for dealer offices.
- Wip: ongoing work on system updates and enhancements.

### Fixed
- Fixed observer bug: resolved an issue affecting observer functionality.

## 10.39.0 (10.12.2024)

### Added
- Add DealersRealAndNotActiveMapDashboard: introduced a dashboard for visualizing real but not active dealers on the map.
- Add DealersRealAndActiveMapDashboard: introduced a dashboard for visualizing real and active dealers on the map.

### Changed
- Wip on Nova maps: ongoing improvements and updates to Nova maps functionality.

## 10.38.0 (09.12.2024)

### Added
- Add expirationDate() quotation method: introduced a method to calculate and handle quotation expiration dates.
- Add Vehicle purchase and current price handlers: implemented handlers for managing vehicle purchase and current price data.

### Changed
- Wip on Global Assistance API: ongoing development and improvements for the Global Assistance API.

## 10.37.0 (09.12.2024)

### Changed
- Refactored changelog.sh: improved the changelog generation script for better maintainability and functionality.

## 10.36.0 (08.12.2024)

### Added
- Add sole_proprietorship attribute to customer: introduced a new attribute to the customer model to indicate sole proprietorship status.

## 10.35.0 (07.12.2024)

### Added
- Add QuotationDealerAverageCommissionsOnPclCalculate action: introduced a new action to calculate average commissions on PCL for dealers.
- Add IBAR delta on quotationPricesTab: included the IBAR delta on the quotation prices tab for enhanced pricing insights.
- Add dealerPCLMarginPercentage on quotationPricesTab: introduced a dealer PCL margin percentage display on the quotation prices tab.

## 10.34.0 (06.12.2024)

### Changed
- Work in progress on the Global Assistance API: ongoing enhancements to the API integration.
- Update --------UpsellingImport to handle multiple vehicles of the same owner for Doc 24 product: improved handling of complex vehicle ownership scenarios.
- Refactored final issuer request document: streamlined the process for generating final issuer documents.
- Optimized Nova WorkableDoneQuotationsDashboard: enhanced performance and usability.

### Fixed
- Nova dashboard WorkableDoneQuotationAnalysis bug fixed: resolved an issue affecting the dashboard's data analysis feature.
- Fixed Str::replaceFirst(null) and Str::replace(null) bug: addressed potential errors caused by null values in string replacement.
- Fixed Str::lower(null) bug: corrected issues related to null values in string conversion to lowercase.
- Typo fixed: minor textual corrections.

## 10.33.0 (05.12.2024)

### Added
- Add laravel/pail: introduced the laravel/pail package for enhanced functionality.

### Changed
- Work in progress on the Global Assistance API: ongoing development to improve the API integration.
- Refactoring: improved code structure and organization.

### Fixed
- Bug fixed on calculateDealerCommissionsValue: resolved an issue affecting dealer commission calculations.

## 10.32.0 (04.12.2024)

### Changed
- Handled multiple credentials for GlobalAssistance: updated the system to support and manage multiple credentials for GlobalAssistance integrations.

## 10.31.0 (03.12.2024)

### Added
- Add additional coverages to GlobalAssistanceCarProFastQuotation: introduced new coverage options to the fast quotation system.

### Changed
- Refactored GlobalAssistanceFastQuotationCommand: improved the structure and efficiency of the command for handling fast quotations.

## 10.30.0 (02.12.2024)

### Changed
- Refactored assignDeltaPriceToIbar: improved the functionality and structure of the assignDeltaPriceToIbar method.
- Renamed updateCommissionsValues to updateCoveragesCommissionsValues method: updated the method name for better clarity and alignment with its purpose.

## 10.29.0 (30.11.2024)

### Added
- Add glassCeiling options: introduced new options for configuring glassCeiling settings.

### Changed
- Global php-cs-fixer: applied global PHP-CS-Fixer for code consistency and improved formatting.

## 10.28.0 (28.11.2024)

### Changed
- Code formatting: improved code structure and readability through proper formatting.

## 10.27.0 (26.11.2024)

### Added
- Add day number to assiclickIccDoc24 flow file name: enhanced file naming for better clarity and organization.

### Changed
- Updated Nova files: brought Nova files up to date with the latest adjustments.
- Refactored GlobalAssistance class methods: improved the structure and performance of GlobalAssistance class methods.

### Fixed
- Fixed QuotationFlowEngineGenerateFlow bug: resolved an issue in the flow generation process.

## 10.26.0 (25.11.2024)

### Fixed
- Fixed bug on putDealerCommissionsToQuotationCoverageData for stand-alone products: resolved an issue affecting dealer commissions for stand-alone products.

### Changed
- Command kernel update: updated the command kernel to improve functionality and maintainability.

## 10.25.0 (24.11.2024)

### Added
- Add QuotationFlowEngineExecutedSlackNotification: introduced a Slack notification for executed quotation flow engine tasks.

### Fixed
- Fixed bug on QuotationFlowEngineGenerateFlow command: resolved an issue in the command to ensure proper flow generation.

## 10.24.0 (23.11.2024)

### Added
- Add CheckHorizonStatus console command: introduced a command to verify the Horizon status.

### Wip
- Work in progress on the Global Assistance API.

## 10.23.0 (22.11.2024)

### Fixed
- Dealer contract view bug fixed: resolved an issue affecting the dealer contract view.

### Wip
- Work in progress on the Global Assistance API.

## 10.22.0 (20.11.2024)

### Added
- Add doc24 data export flow: introduced a new flow for exporting Doc24 data.
- Add is_countable attribute to product: implemented an attribute to indicate whether a product is countable.

### Changed
- Quotation counting section refactored: reorganized and optimized the counting section for quotations.

## 10.21.0 (19.11.2024)

### Added
- Add force option to QuotationFlowEngineGenerateFlow: introduced a force option to the command for greater control during flow generation.
- Add simulations maintenance system: implemented a maintenance system for managing simulations.
- Add quotations maintenance system: introduced a maintenance system for maintaining quotations.
- Add customers maintenance system: added a system to streamline customer maintenance tasks.
- Add vehicles maintenance system: included a dedicated system for vehicle maintenance.
- Add database maintenance system: implemented a comprehensive maintenance system for database management.

### Changed
- QuotationFlow reference updated: refreshed the QuotationFlow reference for improved alignment with system updates.
- Command kernel refactored: reorganized the command kernel for better performance and maintainability.
- Refactored QuotationFlowEngineGenerateFlow command: enhanced the structure and functionality of the command for generating quotation flows.

### Removed
- Remove rounded in quotation calculations: eliminated rounding from quotation calculations to enhance precision.

## 10.20.0 (18.11.2024)

### Changed
- Made handleQuotationCoverageCommissionData public: updated visibility of handleQuotationCoverageCommissionData for broader accessibility.
- sumQuotationCoveragesDealerProductCommissionsValueConfirmed instead of sumQuotationCoveragesDealerCommissionsValueConfirmed in dealerCommissionsValueConfirmed calculation: adjusted the calculation logic to improve accuracy.
- Quotation maintenance refactoring: reorganized and optimized the quotation maintenance process.

## 10.19.0 (17.11.2024)

### Added
- Add autoChangeStateToCompliant quotation action and EmittedToCompliant quotation transition: introduced a new action and transition for automatically changing quotation states to compliant.
- Add quotationCoveragesWithWrongSignatureMandatoryValuesUpdate maintenance system: implemented a system to update mandatory signature values for quotation coverages.
- Add DataBaseTablesHavingColumn console command: added a command to list database tables containing specific columns.
- Add new scope and methods for contract signature maintenance checks: introduced tools to streamline and enhance contract signature maintenance processes.
- Add QuotationByProduct filter on WorkableDoneQuotation: included a filter to refine WorkableDoneQuotation results by product.

### Changed
- Updated kernel maintenance actions for production environment: restricted certain kernel maintenance actions to the production environment only.

### Wip
- Work in progress on the new maintenance system: ongoing development of a comprehensive maintenance system.

## 10.18.0 (15.11.2024)

### Added
- Add signed contracts section for workable quotations: introduced a dedicated section for managing signed contracts in workable quotations.
- Add automatic signed contract for Infodrive products: implemented an automated process for handling signed contracts for Infodrive products.

### Changed
- Update QuotationEvent to handle changeStateToCompliant for quotations that have products without mandatory signatures: enhanced QuotationEvent to better manage state transitions for non-compliant quotations.
- Complete QuotationFlowEngine structure refactoring: performed a comprehensive restructuring of the QuotationFlowEngine for improved functionality and maintainability.

### Fixed
- Bug fixing: addressed various issues across the system for enhanced stability and performance.

## 10.17.0 (14.11.2024)

### Added
- Add purchase button for cart booked quotations: introduced a purchase button to enhance functionality for cart booked quotations.
- Add new brands logo: included additional updated logos for new brands.

### Changed
- Handled cart quotations segnaller commissions: improved the handling of segnaller commissions for cart quotations.
- Update cloneData dealer action: updated the dealer cloneData action for better data management.

### Fixed
- Fixed PDF creation for Doc 24 product: resolved issues with generating PDFs for the Doc 24 product.

## 10.16.0 (13.11.2024)

### Added
- Add cart fuel cards to dealer: introduced fuel cards functionality to the dealer cart system.
- Add Doc 24 to handleAssiclickProductsSelfEmission: integrated Doc 24 into the self-emission handling for Assiclick products.
- Add scopeDoc24Products: implemented a scope for managing Doc 24 products.
- Add AssiclickCreateIccDoc24 action: introduced an action to create ICC documents for Doc 24 in Assiclick.
- Add main_supplier_id handler for cart quotations: added a handler for managing main supplier IDs in cart quotations.
- Add new brands logo: included updated logos for new brands.
- Add claims setaside to margins Google Sheets: incorporated claims setaside data into margins-related Google Sheets.

### Changed
- Renamed margins Google Sheets files: updated the naming conventions for margins-related Google Sheets files for clarity.

## 10.15.0 (12.11.2024)

### Changed
- Update CommissionsHandlers to handle dealer commissions change on the fly: enhanced the CommissionsHandlers to dynamically adjust dealer commissions.

## 10.14.0 (09.11.2024)

### Changed
- Refactored generateSegnallerAccountBalancePdf: reorganized and optimized the PDF generation process for Segnaller account balances.

### Fixed
- Fixed bug on filterMonSegnallers: resolved an issue affecting the filterMonSegnallers functionality.

## 10.13.0 (08.11.2024)

### Changed
- Updated GoogleSheetsSynchronizer: improved the synchronization process and functionality for Google Sheets.

## 10.12.0 (06.11.2024)

### Changed
- Update DealerCardAccounting dealer card: enhanced the DealerCardAccounting card with updated features and improvements.

## 10.11.0 (04.11.2024)

### Added
- Add new attributes to AssiclickEllegiGoogleSheetResource: introduced additional attributes to enhance the functionality of this resource.
- Add new attributes to AssiclickEllegi--------GoogleSheetResource: expanded the resource with new attributes for better data handling.
- Add new method assignDeltaPriceToIbar(): implemented a method to assign delta price values to IBAR for improved calculations.

## 10.10.0 (31.10.2024)

### Added
- Add dealer auto send documents to customer attributes: introduced attributes to enable dealers to automatically send documents to customers.
- Add quotation remissions calculation system: implemented a system to calculate remissions in quotations.

### Changed
- Refactor sendBookingQuotationCustomerMail system: improved and reorganized the system for sending booking quotation emails to customers.

## 10.9.0 (29.10.2024)

### Added
- Add AfiEsca Protego to simulation results sidebar: integrated AfiEsca Protego product into the simulation results sidebar for better visibility.
- Add other products section to simulation results: introduced a new section to display additional products in simulation results.

### Changed
- Renamed Synchronizer to GoogleSheetsSynchronizer: updated the naming for better clarity and context.
- QuotationEvent refactoring: improved the structure and functionality of QuotationEvent handling.

### Fixed
- AfiEsca controller fixed: resolved issues in the AfiEsca controller.
- Route typo fixed: corrected a typo in routing definitions.
- AfiEsca typo fixed: addressed minor typos related to AfiEsca.

## 10.8.0 (28.10.2024)

### Wip
- Work in progress on Afi Esca product: ongoing development and adjustments for the Afi Esca product.

### Fixed
- Typo fix: corrected a minor typo in the system.

## 10.7.0 (25.10.2024)

### Added
- Add remissions attributes to quotations: introduced attributes to manage remissions data within quotations.
- Add prices attributes to quotations: included new attributes to handle detailed pricing information in quotations.

### Changed
- General code refactoring: improved the overall code structure and maintainability.

## 10.6.0 (25.10.2024)

### Added
- Add new geo class system to handle Global Assistance Blu Motor CarPro products: introduced a geographic classification system to enhance the management of Global Assistance Blu Motor CarPro products.

## 10.5.0 (24.10.2024)

### Added
- Add fuel card before MOL attribute on dealers: introduced a new attribute to manage fuel cards before MOL for dealers.
- Add incentive cost before MOL on quotations: included a new attribute to track incentive costs before MOL on quotations.
- Add commissions attributes on quotations: implemented additional attributes to handle commissions in quotations.

### Changed
- Renamed incentive cost attributes on quotations: updated the naming of incentive cost attributes for better clarity and consistency.

## 10.4.0 (23.10.2024)

### Added
- Added new Ellegi dealers contract type: introduced a new contract type tailored for Ellegi dealers.

### Changed
- Google sheets refactoring: improved and optimized the structure and functionality of Google Sheets integration.

## 10.3.0 (22.10.2024)

### Wip
- Work in progress on updating dealers to the new margins system: ongoing adjustments to integrate dealers into the updated margins calculation system.

## 10.2.0 (21.10.2024)

### Fixed
- Typo fixed: corrected a minor typo in the system.

## 10.1.0 (18.10.2024)

### Added
- Add segnallers access to administration backend: enabled segnallers to access the administration backend for enhanced functionality and management.

## 10.0.0 (18.10.2024)

### Added
- Added new margins calculation system: introduced a comprehensive system for calculating margins.
- Add cc email to segnallers to handle sending accounting documents: implemented a cc email feature for better management of accounting document distribution.

### Changed
- Refactored segnallers accounting documents: improved and reorganized the structure of segnallers' accounting documents.

## 9.127.0 (17.10.2024)

### Wip
- Work in progress on the new margins calculation system: further progress on enhancing the margins calculation system.

## 9.126.0 (15.10.2024)

### Wip
- Work in progress on the new margins calculation system: continued development of the updated margins calculation system.

## 9.125.0 (14.10.2024)

### Wip
- Work in progress on the new margins calculation system: ongoing development of an updated system for calculating margins.

## 9.124.0 (11.10.2024)

### Changed
- Renamed car_delivery_time attribute to delivery_time on Quotation model: updated the attribute name for better clarity.
- Removed scar attribute from all models: eliminated the scar attribute as it was no longer required.
- Removed unused attributes on Seller model: cleaned up unused attributes from the Seller model.
- Removed unused attributes on Dealer model: removed unnecessary attributes from the Dealer model.

## 9.123.0 (10.10.2024)

### Added
- Add commissions before MOL attribute on segnallers: introduced a new attribute to manage commissions before MOL for segnallers.

### Changed
- General code refactoring: performed general improvements and optimizations in the codebase for better performance and maintainability.

## 9.122.0 (09.10.2024)

### Added
- Add ON MOL attribute to segnallers: introduced a new attribute, ON MOL, to the segnallers model.
- Add dealer ibar commissions attribute to dealers: included a new attribute for managing dealer IBAR commissions.

### Changed
- Handled ON MOL type for segnallers commissions: implemented support for ON MOL type in segnallers' commission calculations.

### Fixed
- Fixed IVASS data on Ellegi documents: corrected IVASS data issues in Ellegi-related documentation.

### Wip
- Work in progress on decimal rounding in the calculation engine: ongoing improvements to enhance decimal rounding precision.

## 9.121.0 (04.10.2024)

### Changed
- Handled dealer self-products with better names: improved the naming conventions for dealer self-products for better clarity and usability.

## 9.120.0 (03.10.2024)

### Changed
- Dealer contracts format update: revised the formatting for dealer contracts.
- Dealer contract type text update: updated the text related to dealer contract types.

### Fixed
- Typo fixed: resolved a minor typo in the system.

## 9.119.0 (01.10.2024)

### Changed
- Synchronizer updated: improved the functionality and performance of the synchronization process.

## 9.118.0 (30.09.2024)

### Added
- Add new type of Ellegi contract for dealers: introduced a new contract type specifically for dealers under Ellegi.

## 9.117.0 (26.09.2024)

### Added
- Add QuotationIssuerClaimsService model: introduced a new model to handle claims services related to quotation issuers.
- Add Claim Manager Google Sheets sync: implemented a synchronization feature for claims managers with Google Sheets.
- Add countDaysBetween method on time helper: introduced a new method to calculate the number of days between two dates.
- Add Refunder class to handle refund calculations: implemented a class dedicated to handling refund calculations.
- Add complete_refund attribute to QuotationCancellationReason: added an attribute to track complete refunds in cancellation reasons.
- Add claimsManagerGroupAka method to handle claims manager groups: introduced a method to manage claims manager groups.
- Add canceled_month_id to Quotation model: included a field to track the month in which a quotation was canceled.
- Add WorkableDoneQuotationMonthsForClaimsManager Nova filter to WorkableDoneQuotation: introduced a filter to manage quotation months for claims managers.

### Changed
- Refactored WorkableQuotationByClaimsManager Nova filter: improved the filter functionality for WorkableQuotationByClaimsManager.
- Updated QuotationExcelDownloadForClaimsManager adding refund data: enhanced the Excel download for claims managers by including refund-related information.
- Quotation transitions to canceled refactored: restructured the transition process for canceled quotations.

## 9.116.0 (25.09.2024)

### Added
- Add CarbonLocale helper file: introduced a helper file for handling Carbon locale settings.
- Add UserHandler helper file: implemented a new helper file for managing user-related functions.
- Add auto logout system based on logged user type: added an automatic logout system depending on the type of user logged in.
- Add CheckIfUserIsFrontEndUser middleware: introduced middleware to check if a user is a frontend user.
- Add CheckIfUserIsBackEndUser Nova middleware: introduced middleware to check if a user is a backend user in Nova.
- Add flushEverything() and logOutAndFlushEverything() global methods: added global methods to flush data and log out users while clearing all sessions.

### Changed
- Refactored Global and String helpers: reorganized and improved the Global and String helper files.
- Renamed UserMustLogout middleware to FrontEndUserMustLogout: renamed the middleware for logging out frontend users.
- Renamed AdminMustLogout Nova middleware to BackEndUserMustLogout: renamed the Nova middleware for logging out backend users.

## 9.115.0 (21.09.2024)

### Changed
- CalculationEngines code refactoring: performed a thorough refactoring of the CalculationEngines code to enhance performance and maintainability.

## 9.114.0 (20.09.2024)

### Added
- Add DuplicateRate action: introduced a new action to duplicate rates for easier management.

### Changed
- Update GeneralUsersHandler: improved the GeneralUsersHandler with updated functionality and refinements.

## 9.113.0 (19.09.2024)

### Added
- Add default signable_media_booking_type: introduced a default value for signable media booking type.
- Add signable_media_booking_type to Dealer cloneData function: included the signable media booking type in the Dealer cloneData function.
- Add automatic logout for admins trying to use dealer frontend while connected to backend: implemented automatic logout for admins switching between backend and dealer frontend.

### Changed
- Update permissions on SentEmails: adjusted the permission settings for managing SentEmails.
- Update actions permissions on Seller and Segnaller: revised the permission structure for actions on Seller and Segnaller models.
- Update segnaller relationship on DealerAccountingEllegi: refined the relationship between Segnaller and DealerAccountingEllegi.

### Fixed
- Fixed typo: corrected a minor typo in the system.

## 9.112.0 (13.09.2024)

### Added
- Add additional months to products: introduced the ability to add extra months to product durations.

### Changed
- Update quotationCoverage duration value on purchased products: modified the duration value of quotation coverage for purchased products to reflect changes accurately.

## 9.111.0 (11.09.2024)

### Changed
- Login2 refactoring for development server: restructured the Login2 functionality specifically for the development server environment.

## 9.110.0 (10.09.2024)

### Added
- Add Pentanet internal group files: introduced files specific to the Pentanet internal group for better organization and management.

## 9.109.0 (05.09.2024)

### Added
- Add showDealerProducts boolean for quotation PDF: introduced a boolean flag to control the visibility of dealer products in the quotation PDF.
- Add dealer products PDF on EmittedQuotationDealerClickMail: included a dealer products PDF attachment in the EmittedQuotationDealerClickMail.
- Add dealer product system: implemented a system for managing dealer products.

### Changed
- Update EllegiCreateDebitNote only for Ellegi products with IBAR value: modified the EllegiCreateDebitNote process to apply only to Ellegi products with an IBAR value.
- Use receiveCounting() method instead of direct check on model attribute: replaced direct attribute checks with the receiveCounting() method for consistency.
- Update emission countingsReceptionValues() to handle Ellegi products without IBAR value: adjusted the emission countingsReceptionValues() function to manage Ellegi products that lack an IBAR value.
- Update hasIbarConfirmed for quotations without IBAR: modified the hasIbarConfirmed check to accommodate quotations that do not have an IBAR.

## 9.108.0 (26.08.2024)

### Added
- Add dealer product price attributes on quotation model: introduced new attributes related to dealer product pricing in the quotation model.

### Changed
- Wip on dealer products system: ongoing work on enhancing the dealer products system.

## 9.107.0 (09.08.2024)

### Changed
- Huge refactoring on calculation engine: performed extensive improvements and optimizations in the calculation engine for better performance and maintainability.

## 9.106.0 (08.08.2024)

### Added
- Add supplier traits: introduced traits for handling supplier-specific functionality.
- Add product traits: added new traits for product-related operations.
- Add product coverage traits: included traits for managing product coverage.
- Add QuotationDealerProduct model: implemented a new model for associating quotations with dealer products.
- Add copyable to various Nova Final Issuer fields: enabled copyable functionality for several fields in Nova Final Issuer.
- Add copyable to various Nova Issuer fields: enabled copyable functionality for multiple fields in Nova Issuer.
- Add is_dealer_issuer attribute to Dealer model: introduced a new attribute, is_dealer_issuer, in the Dealer model.

### Changed
- Global refactoring to handle variables with new traits: reorganized the codebase to support the newly introduced traits.
- Nova Infodrive quotation actions refactoring: refined the actions related to Infodrive quotations in Nova.

## 9.105.0 (07.08.2024)

### Added
- Add FindMissingTranslations and FindUnusedTranslations commands: introduced commands to find missing and unused translations.
- Add QuotationUpdateEmittingCalculations action: implemented an action for updating emitting calculations in quotations.
- Add dealer aka to Nova CustomerInvoiceEllegi: included the dealer aka field in the Nova CustomerInvoiceEllegi.

### Changed
- Translations refactoring: reorganized and improved the translation files.
- Update WorkableDoneQuotationActions: updated the actions related to WorkableDoneQuotation.

## 9.104.0 (06.08.2024)

### Added
- Add CustomerInvoiceEllegi system: introduced the CustomerInvoiceEllegi system.
- Add missing Policies: included previously missing policies.
- Add emission date to WorkableDoneQuotation index for External claims manager: included the emission date in the WorkableDoneQuotation index for external claims managers.
- Add emission date to QuotationExcelDownloadForClaimsManager: added the emission date to the QuotationExcelDownload for ClaimsManager.

### Changed
- CustomerInvoiceEllegi update: updated the CustomerInvoiceEllegi system.

## 9.103.0 (05.08.2024)

### Added
- Add emission date to WorkableDoneQuotation index for External claims manager: included the emission date in the WorkableDoneQuotation index for external claims managers.
- Add emission date to QuotationExcelDownloadForClaimsManager: added the emission date to the QuotationExcelDownload for ClaimsManager.
- Add rounding delta value check for --------GoogleSheet--------DuesResource: implemented a rounding delta value check in --------GoogleSheet--------DuesResource.
- Add QuotationsWithoutIssuersClaimsServiceIds kernel command: introduced a new kernel command to list quotations without IssuersClaimsServiceIds.

### Changed
- Updated WorkableQuotationByClaimsManager filter: enhanced the WorkableQuotationByClaimsManager filter for improved functionality.
- Updated UserRelatedScope to handle Quotations for externalClaimsManager: updated the UserRelatedScope to better manage quotations for external claims managers.

## 9.102.0 (02.08.2024)

### Added
- Add WorkableQuotationByClaimsManager filter: introduced a filter for WorkableQuotation by ClaimsManager.
- Add claimsManagerAka to QuotationExcelDownloadForClaimsManager: included the claimsManagerAka field in QuotationExcelDownload for ClaimsManager.
- Add month filter for WorkableDoneQuotation: added a month filter to WorkableDoneQuotation.
- Add issuerClaimsService to Quotation: introduced issuerClaimsService field to the Quotation model.

### Changed
- Nova WorkableDoneQuotation refactoring for ClaimsManager: improved the Nova WorkableDoneQuotation for better ClaimsManager handling.
- Refactoring WorkableDoneQuotationMonths: reorganized the WorkableDoneQuotationMonths for enhanced functionality.
- Refactoring WorkableQuotationByForClaimsManager filter: updated the WorkableQuotationByForClaimsManager filter.
- Hide WorkableQuotation for External claims manager: concealed WorkableQuotation from external claims managers.
- getDealerInternalGroupIdAttribute can handle null dealer: updated the getDealerInternalGroupIdAttribute to manage null dealer values.
- ibarPercentage can be null: allowed the ibarPercentage to have null values.
- Moved updateTotalPricesValues after updateVariableCostsValues: rearranged the sequence to update total price values after updating variable costs.
- assiclickEllegiRevenuesValue without -------- update calculateCompensationToEllegiConfirmed bug fixed: fixed a bug in calculating compensation to Ellegi confirmed without -------- update.

### Fixed
- calculateCompensationToAssiclickConfirmed bug fixed: resolved an issue in the calculation of compensation to Assiclick confirmed.
- hasEllegiRevenues typo fixed: corrected a typo in hasEllegiRevenues.

## 9.101.0 (01.08.2024)

### Added
- Add issuers_claims_service_id to Quotation model: introduced a new field, issuers_claims_service_id, to the Quotation model.

### Changed
- Nova Vehicle preview update: updated the preview functionality for Nova Vehicle.
- Nova Customer preview update: updated the preview functionality for Nova Customer.
- Nova ClaimsGuide refactoring: improved the structure and functionality of Nova ClaimsGuide.
- Nova ProductCoverage refactoring: enhanced the Nova ProductCoverage model.
- Changed dillingham/nova-attach-many to letsgoi/nova-attach-many: switched the Nova attach many package to letsgoi/nova-attach-many.
- Nova resources AttachMany refactoring: refactored Nova resources to use the updated AttachMany package.
- Front end open claim modal refactoring: improved the user interface and functionality of the open claim modal.

## 9.100.0 (31.07.2024)

### Added
- Add ClaimsServiceHandlers to DealerClickCalculationEngine: introduced ClaimsServiceHandlers to DealerClickCalculationEngine.
- Add has_dealer_claims_service and has_issuers_claims_service attributes to Quotation: added new attributes for claims services in Quotation.
- Add isExternalClaimsManager User boolean: introduced a boolean field to identify external claims managers in User.

### Changed
- Changed createFromImportDataSimulation is_effect_at_mocked for renewals: updated the createFromImportDataSimulation function to handle is_effect_at_mocked for renewals.
- Changed --------RenewalsImport Simulation expiration_at to defaultExpirationDate: adjusted --------RenewalsImport to set Simulation expiration_at to defaultExpirationDate.
- Change addMonths to addMonthsNoOverflow: updated the addMonths function to use addMonthsNoOverflow.
- Change subMonths to subMonthsNoOverflow: updated the subMonths function to use subMonthsNoOverflow.
- Quotation hasIssuersClaimsService refactoring: refactored the hasIssuersClaimsService method in Quotation.
- Nova Issuer refactoring: improved the structure and functionality of the Nova Issuer model.
- Update Quotation scopeForClaimsManager: enhanced the scopeForClaimsManager method in Quotation.
- Update Vehicle scopeForClaimsManager: improved the scopeForClaimsManager method in Vehicle.
- Quotation hasClaimsManagementServices refactoring: refined the hasClaimsManagementServices method in Quotation.
- Permissions update: updated various permissions settings.
- Add edit customer base and edit customer complete permissions: introduced new permissions for editing customer details.
- Update Customer for new permissions: modified the Customer model to incorporate new permissions.
- Update AdminHandler, AssiclickAccountingHandler, and ExternalClaimsManagerHandler for new permissions: adapted handlers to align with the updated permissions.
- Open claim button only for dealers with claims management service: restricted the open claim button to dealers with the claims management service.
- Minor style fixing: made small adjustments to the styling.
- Removed emissionServiceClaimsEmail from open claim modal: eliminated the emissionServiceClaimsEmail from the open claim modal.

### Fixed
- Fixed isPep User method: corrected the isPep method in the User model.
- Fixed CustomersPerDealer bug on old dealers aka: resolved an issue with the CustomersPerDealer bug affecting older dealers.

## 9.99.0 (30.07.2024)

### Added
- Add CorrectCustomerAddress system: implemented a new system for correcting and standardizing customer addresses for imports.
- Add fullWidth to Trix fields: enhanced Trix fields with a full-width display option.

### Changed
- SunEditor instead of TipTap WYSIWYG editor: switched to SunEditor for a more efficient WYSIWYG editing experience.
- NovaServiceProvider refactoring Add NovaMacros: improved NovaServiceProvider and introduced NovaMacros for additional capabilities.

## 9.98.0 (29.07.2024)

### Added
- Add fake values for --------GoogleSheet--------DuesResource: introduced fake values for --------GoogleSheet--------DuesResource.

### Changed
- Update --------RenewalsImport dealerColumn: modified the dealerColumn in --------RenewalsImport for improved accuracy.

### Fixed
- Fixed updateConfirmedValues IBAR bug: resolved an issue with IBAR values in the updateConfirmedValues function.

## 9.97.0 (28.07.2024)

### Added
- Add some counters to Nova menu: introduced new counters to the Nova menu for better navigation insights.
- Add admin test user system: implemented a system to create and manage admin test users.

### Changed
- WorkableQuotationActions refactoring: reorganized the WorkableQuotationActions for improved performance.
- Nova Admin refactoring: streamlined the Nova Admin model for better maintainability.
- Composer update: updated Composer dependencies and removed unnecessary packages.

## 9.96.0 (26.07.2024)

### Changed
- Nova publish update: refreshed the Nova publish settings.
- Composer update: updated Composer dependencies.
- Nova update: upgraded to the latest version of Nova.
- Update abordage/nova-html-card: upgraded the abordage/nova-html-card package.
- Effect at refactor on Simulation duplicate: improved the simulation duplication process to handle effect at more efficiently.

## 9.95.0 (25.07.2024)

### Added
- Add to_work to Segnaller: introduced a new field, to_work, in the Segnaller model.
- Quotation numbers refactoring: reorganized the structure of quotation numbers.

### Fixed
- GlobalAssistanceBluMotorCarProCvt date bug fixed: resolved a date issue in GlobalAssistanceBluMotorCarProCvt.
- Bug fixed: general bug fixes throughout the system.

## 9.94.0 (24.07.2024)

### Changed
- Quotation refactoring: improved the structure and organization of quotations.

## 9.93.0 (23.07.2024)

### Added
- Add GREEN_BROKER_SEGNALLERS_ELLEGI_COMMERCIAL_AGENT: introduced a new agent type for -------- Segnallers.
- Nova Segnaller update: updated the Nova Segnaller functionality.
- Add Pentanet customizations: included customizations for Pentanet.
- Add default to renewal_commissions: set default values for renewal commissions.

### Changed
- Quotation refactoring: improved the structure and organization of quotations.

### Fixed
- verify.blade bug fixed: corrected a bug in the verify.blade file.

## 9.92.0 (22.07.2024)

### Changed
- serviceInfocarActive UP: updated the serviceInfocarActive status to UP.
- RolesAndPermissions updated: revised roles and permissions settings.
- TrainingController refactoring: improved the TrainingController code structure.
- SimulationsController refactoring: improved the SimulationsController code structure.

### Fixed
- Fixed AddressServiceFacade filename: corrected the filename for AddressServiceFacade.
- DealerBySegnallerScope fixed: resolved an issue with the DealerBySegnallerScope.

## 9.91.0 (19.07.2024)

### Added
- Add nova actions on Quotation for segnallers: introduced new Nova actions for quotations involving Segnallers.

### Changed
- LoginControllers refactoring: improved the structure of the LoginControllers.
- WIP ON KILLING ASSICLICK: ongoing work on removing Assiclick references.
- Removed base Assiclick refs: eliminated base references to Assiclick.

### Fixed
- serviceInfocarActive down: addressed an issue causing the serviceInfocarActive status to be down.
- SimulationsEmissionsOfficeController storeWithoutInfocar bug fixed: fixed a bug in the SimulationsEmissionsOfficeController related to storing without Infocar.

## 9.90.0 (18.07.2024)

### Changed
- Complete refactoring to handle segnaller access to Nova: overhauled the system to manage Segnaller access to Nova.

## 9.89.0 (17.07.2024)

### Added
- Add UserRelatedPolicy: introduced a new policy related to user actions.

### Changed
- Card refactoring: improved the structure of card-related code.
- Huge refactoring: major improvements and restructuring of the codebase.
- WIP on monster refactoring: ongoing work on a major refactoring effort.
- Huge refactoring: significant changes to enhance performance and maintainability.

## 9.88.0 (16.07.2024)

### Updated
- Admin update: revised the admin-related functionality.
- TwoFactorController update: updated the TwoFactorController for better security.

### Changed
- WIP on rolesandpermissions: ongoing work on refining roles and permissions.
- Remove useless role Add Segnaller role starting data: eliminated unnecessary roles and added starting data for the Segnaller role.

## 9.87.0 (15.07.2024)

### Added
- Add new GlobalAssistanceCvt rates: introduced new rates for GlobalAssistanceCvt.

### Fixed
- Fixed typo: corrected a typographical error.
- Typo fixed: resolved another typographical error.

## 9.86.0 (13.07.2024)

### Changed
- Import actions refactoring: improved the structure and efficiency of import actions.

## 9.85.0 (12.07.2024)

### Added
- Add maintenance:quotations-renewals-expired-delete: introduced a new maintenance task for deleting expired quotations and renewals, and added it to the kernel.

### Changed
- Refactoring done: completed various refactoring tasks.

### Wip
- Various work in progress tasks: ongoing development efforts on multiple fronts.

## 9.84.0 (11.07.2024)

### Fixed
- ----------------RemissionsValue bug fixed: resolved an issue with the ----------------RemissionsValue.

### Wip
- Various work in progress tasks: ongoing development efforts on multiple fronts.

## 9.83.0 (10.07.2024)

### Added
- Add change pcl to saved quotations: introduced a new feature to change PCL for saved quotations.
- Add rounding price system: added a system for rounding prices.

### Changed
- Update importDataSimulation actions: improved the actions related to importing data simulations.

### Fixed
- Bug fixed: general bug fixes throughout the system.

### Wip
- Various work in progress tasks: ongoing development efforts on multiple fronts.

## 9.82.0 (09.07.2024)

### Wip
- WIP on price rounding system: ongoing work on the price rounding system.
- -------- dealer commissions due bug fixing: addressed an issue with -------- dealer commissions.

## 9.81.0 (08.07.2024)

### Changed
- Removed cache tags: eliminated cache tags to improve performance.

## 9.80.0 (01.07.2024)

### Changed
- Updated QuotationAssignDeltaPriceToIbar: revised the process for assigning delta prices to IBAR in quotations.
- QuotationAssignDeltaPriceToIbar refactoring: improved the structure and efficiency of the quotation assignment process.
- Update defaultExpirationDate: updated the default expiration date settings.

## 9.79.0 (27.06.2024)

### Wip
- Various work in progress tasks: ongoing development efforts on multiple fronts.

## 9.78.0 (26.06.2024)

### Wip
- Various work in progress tasks: ongoing development efforts on multiple fronts.

## 9.77.0 (25.06.2024)

### Fixed
- Bug fixed: general bug fixes throughout the system.

## 9.76.0 (24.06.2024)

### Changed
- -------- related accounting refactoring: improved the accounting processes related to --------.
- PrintManagement refactoring: enhanced the structure and efficiency of PrintManagement.
- Login layout refactoring: updated the layout for login screens.
- WorkableDoneQuotation search refactoring: improved the search functionality for WorkableDoneQuotations.
- --------Issuer instead of --------Issuer on PrintManagement--------Card: replaced --------Issuer with --------Issuer on PrintManagement--------Card.
- WorkableQuotation search refactoring: improved the search functionality for WorkableQuotations.
- Add select on quotation coverages index: introduced a selection feature on the quotation coverages index.
- Add superhero edit button on emitted quotations: added an edit button for emitted quotations.

### Wip
- Various work in progress tasks: ongoing development efforts on multiple fronts.

## 9.75.0 (19.06.2024)

### Changed
- Services refactoring: improved the structure and efficiency of services.

## 9.74.0 (17.06.2024)

### Added
- Add otherSavedQuotationRenewals: introduced a new feature for other saved quotation renewals.
- Add changeSavedQuotationRenewalsStateToRejected: added the ability to change the state of saved quotation renewals to rejected.

### Wip
- Various work in progress tasks: ongoing development efforts on multiple fronts.

## 9.73.0 (16.06.2024)

### Changed
- Done: completed various tasks.

### Wip
- Various work in progress tasks: ongoing development efforts on multiple fronts.

## 9.72.0 (15.06.2024)

### Changed
- Update -------- Synchronizer jobs: improved the synchronizer jobs for --------.
- Fixed canDisableCoverages bug on standard view: resolved an issue with the canDisableCoverages setting on the standard view.

## 9.71.0 (14.06.2024)

### Changed
- Handle multiple -------- segnallers --------GoogleSheetSegnallersResource refactoring: improved the handling of multiple -------- segnallers.

## 9.70.0 (13.06.2024)

### Wip
- Various work in progress tasks: ongoing development efforts on multiple fronts.

## 9.69.0 (11.06.2024)

### Changed
- -------- and -------- margin refactoring done: completed the margin refactoring for -------- and --------.

## 9.68.0 (10.06.2024)

### Added
- Add issuer_commissions_on_net on product coverage: introduced a new field for issuer commissions on net in product coverage.
- Add ellegi--------CommissionsValueConfirmed: added a field for confirming Ellegi -------- commissions value.

### Changed
- Update vehicleSeniorityUponExpirationDays rule: updated the rule for vehicle seniority upon expiration days.
- Various work in progress tasks: ongoing development efforts on multiple fronts.

### Fixed
- Fixed ellegiQuotationDue and assiclickQuotationDue updateValues bug: resolved issues with the update values for Ellegi Quotation Due and Assiclick Quotation Due.
- Bug fixing: general bug fixes throughout the system.
- Typo fixed: corrected typographical errors.
- Typo fixed: resolved another typographical error.
- Fixed changePcl bug: addressed an issue with the changePCL feature.
- Fixed QuotationNumbersSegnallers bug: resolved an issue with QuotationNumbersSegnallers.

## 9.67.0 (06.06.2024)

### Added
- Added renewal quotations scopes: introduced new scopes for renewal quotations.

### Changed
- Dealer accounting index page refactoring: improved the structure and efficiency of the dealer accounting index page.

### Fixed
- Fixed dealer accounting view bug: resolved an issue with the dealer accounting view.

## 9.66.0 (04.06.2024)

### Changed
- WIP on segnallers commissions refactoring: ongoing work to improve segnallers commissions.

### Fixed
- Fixed ibarPercentage bug on recalculated simulations (duplicated entry removed): resolved duplicate entries causing incorrect calculations.

## 9.65.0 (03.06.2024)

### Added
- Added -------- mail template: introduced a new email template for -------- communications.

### Changed
- Code refactoring: improved code structure for better maintainability.
- Fixed GlobalAssistanceBluMotorCarProCvt vehicle seniority bug: corrected vehicle seniority calculation issue.

## 9.64.0 (31.05.2024)

### Changed
- Updated --------GoogleSheetDealerDuesResource: revised the resource to reflect recent updates.

## 9.63.0 (30.05.2024)

### Added
- Added --------DealerWeeklyAccountingClosings: new feature for weekly accounting closings for -------- dealers.

## 9.62.0 (29.05.2024)

### Changed
- Completed --------DealerWeeklyAccountingClosings: finalized the dealer weekly accounting closings for --------.
- Replaced mailgun mail with Postmark inbound: switched email service from mailgun to Postmark for inbound emails.

## 9.61.0 (28.05.2024)

### Changed
- Updated --------GoogleSheetDues: enhanced the dues calculation in the -------- Google Sheet.
- Updated Yousign SDK to iframe-sdk-1.5.0: upgraded the Yousign SDK for better performance and new features.
- WIP on -------- accounting: ongoing improvements to -------- accounting processes.

## 9.60.0 (25.05.2024)

### Added
- Added --------GoogleSheetDealerDuesJob: new job to handle dealer dues in the -------- Google Sheet.

## 9.59.0 (23.05.2024)

### Changed
- WIP on --------GoogleSheetDealerDuesJob: ongoing work to improve the dealer dues job.

## 9.58.0 (22.05.2024)

### Added
- Added canDisableCoverages to dealers user: new feature allowing dealers to disable coverages.

## 9.57.0 (21.05.2024)

### Changed
- Composer update: upgraded Composer to the latest version.

## 9.56.0 (20.05.2024)

### Added
- Added emission office user simulation form: new form for emission office user simulations.

### Fixed
- Typo fixed: corrected typographical errors.
- Missing compiled data: addressed missing data issues.

## 9.55.0 (17.05.2024)

### Changed
- WIP on customer site: ongoing work to improve the customer site.
- WIP on customer refactoring: ongoing refactoring of customer-related code.

### Fixed
- Quotation allDownload bug fixed: resolved an issue with downloading all quotations.

## 9.54.0 (16.05.2024)

### Changed
- WIP on customer refactoring: ongoing refactoring of customer-related code.

## 9.53.0 (15.05.2024)

### Added
- Added dealer contractual documents to the customer: new feature to include contractual documents for customers.
- Added sendBookingQuotationCustomerMail on book event: sends an email when a booking quotation is created.
- Added dealerSignableMediaBookingType system: new system for dealer signable media booking types.
- Added Ellegi Help Desk filter for Assiclick countings check: new filter for checking Assiclick countings in the Help Desk.
- Added QuotationRenewals scopes: new scopes for quotation renewals.

### Fixed
- Fixed bug for Help Desk coverage: resolved an issue with Help Desk coverage.
- Print management typo fix: corrected typographical errors in print management.

## 9.52.0 (14.05.2024)

### Added
- Added hidden renewals_sellerId: new hidden field for renewals seller ID.
- Added dealerIbarMinPercentage: new field for dealer IBAR minimum percentage.
- Added CommissionsComposition: new feature for managing commission compositions.

### Changed
- WIP on -------- debit note: ongoing work on -------- debit note.
- WIP on -------- debit note: ongoing work on -------- debit note.

### Fixed
- Renewals print bug fixed: resolved an issue with printing renewals.
- Various bug fixes: addressed multiple issues throughout the system.

## 9.51.0 (13.05.2024)

### Added
- Added Segnallers commissionsTypes: new commission types for Segnallers.
- Added renewals simulation effect_at: new feature for renewals simulation effect date.

### Changed
- WIP on dealer starting ibar value: ongoing work on dealer starting IBAR value.
- WIP on -------- segnaller commissions: ongoing work on -------- Segnaller commissions.
- WIP on renewals simulation effect_at: ongoing work on renewals simulation effect date.

### Fixed
- Various bug fixes: addressed multiple issues throughout the system.

## 9.50.0 (10.05.2024)

### Added
- Added IBAR composition view on quotations: new view for IBAR composition on quotations.
- Added removeIbarVariationLimit to quotation change PCL: new feature to remove IBAR variation limit in quotation change PCL.

### Changed
- Skip mandatoryCoverages for isEmissionsOfficeComplete: updated to skip mandatory coverages when emissions office is complete.

## 9.49.0 (09.05.2024)

### Changed
- Complete refactoring of home and simulation: overhauled the home and simulation components.

### Fixed
- Various bug fixes: addressed multiple issues throughout the system.

## 9.48.0 (08.05.2024)

### Added
- Added Limitless product rule: new rule for limitless products.
- Added Nova DealerImpersonateLog: new log for Nova dealer impersonations.

## 9.47.0 (07.05.2024)

### Added
- Added dealers user canChangePcl: new feature allowing dealers to change PCL.
- Added session user cannotSeeIbar: new session user setting to hide IBAR.

### Changed
- Updated isNotModifiable DealersUser internal refactoring: improved internal refactoring for DealersUser.

### Fixed
- Fixed JavaScript ibarPlusVariationCommissionsRate bug: resolved a bug with the JavaScript IBAR plus variation commissions rate.

## 9.46.0 (06.05.2024)

### Fixed
- Fixed GlobalAssistanceBluMotorCarProCvt months seniority: corrected the seniority calculation for GlobalAssistanceBluMotorCarProCvt.

## 9.45.0 (04.05.2024)

### Added
- Added dealerHasHiddenCommissionsPercentage for better commission tracking: new feature for tracking hidden dealer commissions percentage.

## 9.44.0 (30.04.2024)

### Changed
- Huge refactoring to improve code structure and efficiency: major improvements to the codebase for better performance and maintainability.

## 9.43.0 (26.04.2024)

### Added
- Added emitted quotations sections for better tracking of quotations: introduced new sections for emitted quotations.

## 9.42.0 (24.04.2024)

### Changed
- Huge work in progress on the frontend: ongoing major improvements to the frontend.

## 9.41.0 (20.04.2024)

### Changed
- General code refactoring to improve performance and maintainability: improved the overall structure and performance of the codebase.

## 9.40.0 (19.04.2024)

### Changed
- Work in progress on vehicle models search functionality: ongoing development of the vehicle models search feature.

## 9.39.0 (05.03.2024)

### Changed
- Google Sheets refactoring to improve functionality and performance: overhauled the Google Sheets integration for better performance.

## 9.38.0 (02.03.2024)

### Added
- Introducing Kokua system for local environment: introduced the Kokua system for managing local environments.

### Changed
- Complete code refactoring: overhauled the entire codebase for better performance and maintainability.

## 9.37.0 (18.02.2024)

### Changed
- Updated controlMaxVehiclePurchaseValueWithoutSatellite for better vehicle purchase value control: improved the control mechanism for maximum vehicle purchase value without satellite.
- Front end refactoring to improve code structure and maintainability: enhanced the structure and maintainability of the frontend code.

## 9.36.0 (17.02.2024)

### Changed
- Complete refactoring of the codebase for enhanced performance and readability: overhauled the entire codebase to improve performance and readability.

## 9.35.0 (09.02.2024)

### Added
- Added Global Assistance Cvt: introduced the Global Assistance Cvt feature.

## 9.34.0 (08.02.2024)

### Added
- Added console message for debugging and user notifications: introduced a console message for better debugging and user notifications.

### Changed
- Removed all CSS wow animations to improve performance and reduce visual clutter: eliminated CSS wow animations for better performance.

## 9.33.0 (31.01.2024)

### Changed
- Refactored the home form for improved usability and performance: improved the home form structure and usability.
- Refactored the simulation form to streamline user interactions: enhanced the simulation form for better user interactions.
- Updated the date picker component to enhance date selection functionality: improved the date picker component for better functionality.

## 9.32.0 (30.01.2024)

### Added
- Updated Wakam products with the latest specifications and features: introduced updates to Wakam products.

## 9.31.0 (28.01.2024)

### Added
- Included server status section in the README for better monitoring and transparency: added a section in the README for monitoring server status.
- Initial work on integrating Wakam products into the system: started the integration of Wakam products.

## 9.30.0 (26.01.2024)

### Fixed
- Minor typo fix in documentation: corrected a minor typo in the documentation.

## 9.29.0 (24.01.2024)

### Added
- Applied PHP-CS-Fixer for code consistency: used PHP-CS-Fixer to ensure code consistency.

## 9.28.0 (23.01.2024)

### Changed
- Wip on city search: Work in progress on city search functionality.
- Wip on territories services: Work in progress on territories services.
- 
### Fixed
- RelationshipsCustomerArrays bug fixed: Resolved a bug related to RelationshipsCustomerArrays.

## 9.27.0 (22.01.2024)

### Added
- Add product exclude rule: Implemented a rule for excluding products.

### Fixed
- Quotations without signable media bug fix: Fixed a bug related to quotations without signable media.

## 9.26.0 (21.01.2024)

### Changed
- Service refactoring: Refactored service code for optimization and improvement.

## 9.25.0 (20.01.2024)

### Changed
- Service renaming: Renamed one or more services.

## 9.24.0 (19.01.2024)

### Changed
- Composer update: Updated Composer dependencies.
- Vendor public update: Updated public vendor files.
- IDE update: Updated integrated development environment.
- Service refactoring: Refactored service code for improved performance.
- Refactoring services and introducing Kokua: Restructured services and introduced Kokua.

## 9.23.0 (18.01.2024)

### Changed
- PDF print refactoring: Refactored PDF printing functionality.

## 9.22.0 (17.01.2024)

### Changed
- Config updates: Implemented various updates to configurations.

## 9.21.0 (03.01.2024)

### Added
- Add SezeGoogleSheetSegnallers: Added SezeGoogleSheetSegnallers to enhance Google Sheets integration.

## 9.20.0 (02.01.2024)

### Changed
- Update services for 2024: Updated services to align with 2024 requirements and standards.

## 9.19.0 (31.12.2023)

### Changed
- Update defaultExpirationDate and 2024 sheets: Updated the default expiration date and 2024 sheets for accuracy and consistency.

## 9.18.1 (21.12.2023)

### Fixed
- Bug fixing ImportDataUpsellingCustomer: Fixed bugs in the ImportDataUpsellingCustomer process to enhance reliability.

## 9.18.0 (21.12.2023)

### Changed
- Feat ellegi suppliers refactoring: Improved code readability and efficiency for managing ellegi suppliers.

## 9.17.0 (16.12.2023)

### Changed
- Dealer purge data refactoring: Refactored the code handling the deletion of dealer data to improve readability, reduce complexity, and increase efficiency.

## 9.16.0 (15.12.2023)

### Added
- Added Infodrive satellite alarm to the assiclick group: A satellite alarm feature called Infodrive has been added to the assiclick group to enhance security and monitoring capabilities.
- Added product bundle system: Implemented a system to create product bundles, enabling the grouping of multiple products for simplified sales and management.
- Added QuotationByCustomerType quotation filter: Introduced a new filter called QuotationByCustomerType to allow filtering of quotations based on customer types, providing more targeted sales and analysis.
- Added product geo satellite limit: Set a limit on the geographical coverage of satellite products to ensure efficient and controlled distribution.

### Changed
- Roles updated: Updated and modified user roles to reflect changes in responsibilities and access permissions within the system.

## 9.15.0 (06.12.2023)

### Changed
- Upselling import complete refactoring: The upselling import feature has undergone a complete refactoring.

## 9.14.0 (29.11.2023)

### Added
- Added BvInvest internal group and related Google Sheets: A new internal group, BvInvest, has been added along with related Google Sheets.

### Changed
- Updated QuotationExcelDownloadForClaimsManager: The QuotationExcelDownloadForClaimsManager feature has been updated.

### Fixed
- RelationshipsDealerBooleans bug fixing: This update addresses and resolves bugs related to the RelationshipsDealerBooleans.

## 9.13.0 (24.11.2023)

### Added
- Add dealer claim service option: The addition of a claim service option for dealers has been implemented.

### Changed
- Update Assiclick registered office address: This update involves the modification of the registered office address for Assiclick.
- Removed claims management costs for dealers with option: In this update, claims management costs have been removed for dealers who have opted for the new service option, streamlining their cost structure.
- Update Ellegi Covea policy: The Ellegi Covea policy has been updated, incorporating changes in coverage, terms, or other policy-related details.

## 9.12.0 (23.11.2023)

### Added
- Add administrative_cc_email to Dealer: This update includes the addition of administrative_cc_email to the Dealer.

### Changed
- Renamed Letizia to Seze: In this update, the name "Letizia" has been renamed to "Seze" for consistency and clarity within the system.
- Google Sheets complete refactoring: This update involves a comprehensive refactoring of Google Sheets.

### Fixed
- Fixed administrative_cc_email nullable bug: This update addresses a bug related to the administrative_cc_email field, ensuring that it functions correctly and is not nullable when it shouldn't be.

## 9.11.0 (14.11.2023)

### Added
- Add package, stand alone, and issuer tied options to segnallers: New options including package, stand alone, and issuer tied options have been added to segnallers.
- Add dedicated Google sheet to segnallers: A dedicated Google sheet has been introduced for segnallers.

### Changed
- Set segnallers username and password nullable: The username and password fields for segnallers have been made nullable.
- Segnallers refactoring: This update involves a comprehensive refactoring of segnallers.

## 9.10.0 (09.11.2023)

### Added
- Add issuers IT platform costs: This update involves the addition of IT platform costs for issuers.

## 9.9.0 (07.11.2023)

### Changed
- Claims notification refactoring: The update includes a complete overhaul of the claims notification system.

## 9.8.0 (03.11.2023)

### Added
- Add renewal bank transfer slip option to dealer: This update introduces a new feature that allows dealers to have the option to require bank transfer slips for renewal emissions.

### Changed
- Seller replyToAddress instead of dealer in customer email: In this update, the reply-to address in customer emails has been updated to use the seller's email address instead of the dealer's.

## 9.7.0 (29.10.2023)

### Changed
- RemoveTrailingSlash update: This update introduces enhancements to the RemoveTrailingSlash functionality. 
- Route::redirect instead of Redirect::to: This update includes a change in the routing mechanism. The code has been updated to use Route::redirect instead of Redirect::to, resulting in more streamlined and efficient routing processes. 

### Fixed
- RemoveTrailingSlash bug fixed: In this update, a bug related to the RemoveTrailingSlash feature has been addressed and resolved.

## 9.6.0 (28.10.2023)

### Changed
- Laravel 10 update

## 9.5.0 (26.10.2023)

### Added
- Added front end user change password system: This update includes the implementation of a new feature that allows users to change their passwords directly from the front end of the system. 

### Changed
- Updated dealer user password related emails: In this update, the email templates related to password management for dealer users have been updated.
- Updated seller user password related emails: Similarly, the email templates related to password management for seller users have been updated in this update. 

### Fixed
- Fixed UserMustLogout bug: This update addresses and resolves the UserMustLogout bug. 

## 9.4.0 (25.10.2023)

### Added
- Added front end impersonate system: This update introduces a new feature that allows users to impersonate the front end of the system.
- Add dedicated route to impersonate user: This update introduces a dedicated route that allows authorized users to impersonate other users within the system. 
### Changed
- Removed username and password view from backend: In this update, the username and password view has been removed from the backend. This change enhances the security of the system by eliminating direct access to sensitive login credentials.

## 9.3.0 (19.10.2023)

### Added
- Add SignableDossierState technical transitions: This update introduces new technical transitions for the SignableDossierState.
- Add SyncMultipleQuotationsGoogleSheet to QuotationChangeSeller: The functionality to synchronize multiple quotations with Google Sheets has been added to the QuotationChangeSeller feature.

### Fixed
- HandleSignatureRequestActivated state on null bug fixed: A bug related to the HandleSignatureRequestActivated state, where it was encountering null values, has been identified and fixed.

## 9.2.0 (18.10.2023)

### Added
- Add usleep to update Google Sheets methods: To optimize the performance and stability of the update process for Google Sheets, the "usleep" function has been added.

### Changed
- Maintenance commands refactoring: This update focuses on refactoring the maintenance commands, improving their efficiency and code structure.
- Test on Google Sheets sync jobs: In this update, extensive testing has been performed on the sync jobs related to Google Sheets integration.
- Trustproxies rollback: This update involves rolling back the Trustproxies feature to a previous version. 

## 9.1.0 (17.10.2023)

### Changed
- Work in progress on TrustProxies for load balancer: This update focuses on improving TrustProxies functionality for the load balancer. 
### Fixed
- Fixed startOfDay Assiclick Dealer Accounting bug: This update addresses a bug related to the startOfDay function in Assiclick Dealer Accounting.

## 9.0.0 (17.10.2023)

### Added
- Launched new backend version

## 9.0.0-RC.17 (17.10.2023)

### Added
- Add silenced jobs: The ability to add silenced jobs has been implemented.

### Changed
- Removed appCacheBusting: The appCacheBusting feature has been completely removed from the system. This feature was responsible for caching certain app resources, and its removal may result in improved performance and reliability.
- Console kernel update: The console kernel has been updated to the latest version, improving the overall performance and stability of the system.

### Fixed
- Booked quotation actions button bug fixed: A bug related to the actions button in the booked quotation section has been identified and fixed.
- Yousign bug fixed: A bug related to Yousign, a digital signature solution, has been identified and resolved.

## 9.0.0-RC.16 (16.10.2023)

### Changed
- Console kernel update: The console kernel has been updated to the latest version, improving the overall performance and stability of the system.
- Claim filters reordering: The filters for claims have been reorganized, allowing users to easily prioritize and customize the order in which they appear, enhancing the usability and efficiency of the claim management process.

### Fixed
- ClaimPerState and DealerClaimPerState bug fixed: Bugs related to the ClaimPerState and DealerClaimPerState functionalities have been identified and fixed, ensuring that these features now work as intended without any issues or errors.

## 9.0.0-RC.15 (15.10.2023)

### Added
- Activated new backend for all admins: A new backend system has been activated for all administrators.
- Activate 2FA: Two-Factor Authentication (2FA) has been implemented, adding an extra layer of security to user accounts.

## 9.0.0-RC.14 (11.10.2023)

### Added
- Add Postmark service: The Postmark service has been added to the system, allowing for reliable and efficient email delivery. This service provides advanced features such as email tracking, bounce handling, and spam filtering, ensuring that emails reach their intended recipients successfully.
- Add Email management page on back end to see all mail templates: A new email management page has been added to the back end of the system, allowing users to view and manage all available mail templates.
- Add Pdf management page on back end to see all system generated Pdf: A new PDF management page has been implemented in the back end, providing users with the ability to view and manage all PDF files generated by the system.

### Changed
- Set Mailgun as secondary mail service: Mailgun has been designated as the secondary mail service. This means that in addition to the existing primary mail service, Mailgun will now be used as a backup option for sending and receiving emails. This redundancy in mail services enhances email delivery reliability and ensures smooth communication with customers and clients.
- Mail complete refactoring: The entire mail system has undergone a comprehensive overhaul to enhance its performance and functionality.
- Commissioni instead of provvigioni: The terminology used within the system has been updated to use the term "Commissioni" instead of "Provvigioni".
- Update subjectBase data: The subjectBase data within the system has been updated.

### Fixed
- QuotationTransitionToRevoked action bug fix: A bug related to the QuotationTransitionToRevoked action has been identified and resolved, ensuring that the action functions correctly without any issues.
- Fixed header subject metadata length bug: A bug affecting the length of the header subject metadata has been fixed, ensuring that the data is displayed correctly without any truncation or display issues.

## 9.0.0-RC.13 (26.09.2023)

### Added
- Add new helpers on RelationshipsCustomerStrings: This update introduces new helper functions within the RelationshipsCustomerStrings module, providing additional functionality and assistance in managing customer relationships.
- Add PEP attribute on customers: This update includes the addition of a PEP (Politically Exposed Person) attribute to the customers module. The PEP attribute allows for the identification or categorization of customers who hold positions of political influence or prominence.
- Add legal representative data to customers: This update involves the inclusion of legal representative data within the customers module.
- Add print management system: This update introduces a new print management system to the existing software or platform. The print management system enables users to efficiently manage and control the printing process including document preparation

### Changed
- Translations update: This update focuses on updating the translations within the system.
- QuotationCoverageNumbers confirmed values add null type: This update involves modifying the QuotationCoverageNumbers module to include a null type for confirmed values.
- Dealer loan data PDF refactoring: This update involves refactoring or restructuring the code related to generating PDFs for dealer loan data.

### Fixed
- Typo fixing: This update addresses and fixes any typographical errors or mistakes found within the codebase.

## 9.0.0-RC.12 (25.09.2023)

### Added
- Activate all notifications on new Nova backend: This update activates all notifications on the new Nova backend, ensuring that users receive relevant notifications and updates within the Nova administration panel.

### Changed
- Update Nova translations: This update focuses on updating the translations within the Nova administration panel.
- SystemUsersHandler permissions refactoring: This update involves refactoring the permissions logic within the SystemUsersHandler module.
- Change partialCompliant notification: This update involves changing the partialCompliant notification, which is used to notify users about partial compliance status.

### Fixed
- Fixing N+1 Queries: N+1 queries refer to a common performance issue when querying relational databases. This update addresses such queries by optimizing the code to fetch related data more efficiently, reducing the number of queries executed and improving overall performance.

## 9.0.0-RC.11 (25.09.2023)

### Added
- Add unsigned to duration attribute: This update adds the "unsigned" property to the duration attribute of a specific model.

### Changed
- getDealerInternalGroupAkas instead of getDealerInternalGroupNames: This update involves modifying the code to use the "getDealerInternalGroupAkas" function instead of the "getDealerInternalGroupNames" function.

### Fixed
- Fixed SignableMediaService state bug: This update addresses a bug or issue related to the state management of the SignableMediaService module.

## 9.0.0-RC.10 (24.09.2023)

### Added
- Add Cache for simulationCoverages: This update involves implementing caching mechanisms to store and retrieve simulationCoverages data.
- Add duration to Quotation and QuotationCoverage: This update adds a duration field to the Quotation and QuotationCoverage models. 

### Changed
- Error 500 page update: This update focuses on enhancing the error handling and user experience when encountering a server error (HTTP 500). 
- Update migration: This update involves modifying an existing migration file to include additional changes or fixes.
- Quotation and QuotationCoverage migrations updated: This update involves making changes to the Quotation and QuotationCoverage migrations to improve the database structure. 
- Stubs update: Stubs are template files used for generating code.
- querydetector refactoring: This update involves refactoring the querydetector module.
- Removed DealerAccessors: This update involves removing the DealerAccessors code or functionality from the project.

### Fixed
- Fixing N+1 Queries: N+1 queries refer to a common performance issue when querying relational databases. This update addresses such queries by optimizing the code to fetch related data more efficiently, reducing the number of queries executed and improving overall performance.
- Typo fixing on QuotationPaymentAccessors docblock: This update addresses a typographical error in the docblock comments related to QuotationPaymentAccessors.

## 9.0.0-RC.9 (22.09.2023)

### Changed
- Drop support for PHP 7: This update involves discontinuing support for PHP versions older than PHP 8 in the project. 

## 9.0.0-RC.8 (22.09.2023)

### Added
- Add Scout Apm: This update involves adding Scout Apm to the project. Scout Apm is a performance monitoring tool specifically designed for web applications. 

## 9.0.0-RC.7 (21.09.2023)

### Changed
- Laravel model states update: This update focuses on updating the model states in Laravel. 
- Composer update: This update involves updating the Composer dependencies of the project. 
- app.php update: This update pertains to the app.php configuration file in Laravel. 
- GoogleDriveServiceProvider update: This update involves updating the GoogleDriveServiceProvider in Laravel. The GoogleDriveServiceProvider is responsible for integrating Google Drive functionality into Laravel applications. 
- Composer update for Laravel 9: This update specifically focuses on updating the Composer dependencies for Laravel 9. 
- Composer update before upgrading: This update emphasizes the need to update Composer dependencies before performing an upgrade. 
- index.php update: This update involves updating the index.php file in Laravel. 
- Default config files: This update relates to the default configuration files in Laravel. 
- Prepare app.php for 9: This update focuses on preparing the app.php configuration file for Laravel 9. 
- _ide_helper_models update: This update pertains to the _ide_helper_models file in Laravel.

## 9.0.0-RC.6 (21.09.2023)

### Fixed
- Nova Claim typo fix: This update addresses a typo in the Nova Claim feature.

## 9.0.0-RC.5 (21.09.2023)

### Changed
- Convert deprecated $dates property to $casts: This update involves converting the deprecated $dates property to $casts. The $dates property was used to specify the attributes that should be treated as dates, but it has been deprecated in favor of the $casts property.
- Adopt class-based routes: This update focuses on adopting class-based routes. Class-based routes provide a more structured and organized way to define routes in Laravel applications.
- RouteServiceProvider update: This update pertains to the RouteServiceProvider. The RouteServiceProvider is responsible for loading the application's routes. 

## 9.0.0-RC.4 (21.09.2023)

### Fixed
- UserSessionData typo fixing: This update focuses on fixing a typo in the UserSessionData functionality. 

## 9.0.0-RC.3 (21.09.2023)

### Changed
- Convert route options to fluent methods: This update involves converting route options to fluent methods. 
  
## 9.0.0-RC.2 (20.09.2023)

### Changed
- Use Faker methods: The update incorporates the use of Faker methods, which provide a convenient way to generate fake data for testing and development purposes. 
- Convert optional() to nullsafe operator: The optional() method has been replaced with the nullsafe operator in this update. 
- Use PHP 8 match expression instead of switch: The switch statements in the code have been replaced with the match expression introduced in PHP 8. 
- Remove web.config: The web.config file has been removed in this update. This file is specific to certain web servers and is not required for the application to function properly.
- Update core files: The core files of the application have been updated in this release. 
- Convert to Symfony Mailer: The update involves migrating from the existing mailer system to the Symfony Mailer component. 
- Streamline $commands property: The $commands property has been streamlined in this update.
- Remove fruitcake/laravel-cors dependency: The dependency on the fruitcake/laravel-cors package has been removed in this update. This package was used for handling CORS (Cross-Origin Resource Sharing) in Laravel applications.
- Trusted Proxies update: The update includes an update to the Trusted Proxies configuration. 

## 9.0.0-RC.1 (19.09.2023)

### Fixed
- Yousign smart anchor bug fixed: A bug related to the Yousign smart anchor feature has been fixed in this update. The bug was causing issues with the proper functioning of the smart anchor functionality within Yousign, leading to incorrect placements or alignments of signatures or other elements.

## 9.0.0-RC (19.09.2023)

### Changed
- Move Lang folder: The Lang folder has been relocated in this update. This change aims to enhance the organization and management of language files within the project.
- Base config for Laravel 9.0 update: The base configuration for Laravel has been updated to version 9.0 in this update. 

## 8.72.1 (19.09.2023)

### Fixed
- asset instead of mix for PDF bug fixed: A bug related to the generation of PDFs has been fixed in this update. The bug was caused by using the "mix" function instead of the "asset" function for retrieving certain assets or resources within the PDF generation process. This led to errors or missing assets in the generated PDFs. 
- Restore Nova RevokedQuotation: The Nova RevokedQuotation feature has been restored in this update. This feature allows users to view and manage revoked quotations within the Nova interface. 

## 8.72.0 (18.09.2023)

### Added
- Add Enlightn service: A new service called Enlightn has been added in this update. Enlightn is a tool used for analyzing and improving the quality, performance, and security of Laravel applications. 
- Add new product to AutovipZeroFranchigiaImport: A new product has been added to the AutovipZeroFranchigiaImport module. 
- Add Nova Two Factor: The Nova Two Factor authentication feature has been added to the system. 

### Changed
- Hide Nova Telescope link in production env: The Nova Telescope link, which is a debugging tool used during development, has been hidden in the production environment.
- Update Telescope: The Telescope debugging tool has been updated specifically for the local environment. 
- Removed Mailcoach code: The Mailcoach code, which was previously integrated into the system, has been removed in this update. 

### Fixed
- Fixed Nova UrlShortener view bug: A bug related to the Nova UrlShortener view has been fixed in this update. The issue was causing incorrect behavior or rendering of the UrlShortener view within the Nova interface. 
- ABI email receiving bug fix: A bug related to the receiving of emails sent to ABI has been addressed and fixed in this update. The bug was causing issues with email reception, leading to potential disruptions in communication and workflow.

## 8.71.0 (15.09.2023)

### Added
- Add new error pages: In this update, new error pages have been added to the system. These error pages are designed to provide users with a more informative and user-friendly experience when encountering errors or issues while using the application.

### Changed
- Mix cache busting instead of appCacheBusting: This update introduces a change in the caching mechanism used in the application. The previous appCacheBusting method has been replaced with Mix cache busting.

## 8.70.0 (14.09.2023)

### Changed
- Composer refactoring: This update focuses on refactoring the Composer, the dependency management tool used in the project. 
- Code global refactoring: This update involves a massive refactoring of the system's codebase. The refactoring process focuses on improving the overall structure, organization, and efficiency of the code.

## 8.69.0 (13.09.2023)

### Changed
- Composer refactoring: This update focuses on refactoring the Composer, the dependency management tool used in the project. 
- Removed nova mirovit/nova-notifications: In this update, the nova mirovit/nova-notifications package has been removed from the system. This package was responsible for handling notifications within the Nova interface.
- Removed Nova NovaMapCard: The Nova NovaMapCard feature has been removed in this update. This feature provided a map card component within the Nova interface.
- Update Nova modalSize: This update brings an update to the Nova modalSize feature. The modalSize determines the size of the modal windows in the Nova interface.
- Refactoring Nova MultiselectFilter: The Nova MultiselectFilter feature has undergone refactoring in this update. 
- Removed Nova NovaDependencyContainer: The Nova NovaDependencyContainer has been removed in this update. This feature was responsible for managing dependencies within the Nova interface. 
- Removed Nova TextCopy: In this update, the Nova TextCopy feature has been removed from the system. This feature provided a text copying functionality within the Nova interface.

## 8.68.0 (12.09.2023)

### Changed
- Removed Nova MenuCollapsed: In this update, the Nova MenuCollapsed feature has been removed from the system. This feature was previously responsible for handling the collapsed state of the menu in the Nova interface. 
- Removed Nova SearchesRelations: Another change in this update is the removal of the Nova SearchesRelations feature. This feature was responsible for handling search relations within the Nova interface.

### Fixed
- Nova v4.27.9 (Silver Surfer) bug fixing: This update also includes bug fixing for Nova v4.27.9, codenamed Silver Surfer. Several issues and bugs that were identified in the previous version of Nova have been addressed and fixed in this release.

## 8.67.1 (11.09.2023)

### Fixed
- Fix Customer Quotation Deny Empty View: This update addresses an issue related to the Customer Quotation Deny Empty View. Previously, there was a bug that caused the view to display empty or incorrect information when a customer's quotation was denied.

## 8.67.0 (07.09.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- Claims refactoring: This update involves refactoring the claims functionality in order to activate an external claim service on the new backend.

## 8.66.0 (06.09.2023)

### Added
- Add Tua Genesi product: This update introduces a new product called "Tua Genesi" to the system. 

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- Claims refactoring: This update involves refactoring the claims functionality in order to activate an external claim service on the new backend.

## 8.65.1 (05.09.2023)

### Fixed
- getDealerId Bug fixing: This update addresses a bug related to the getDealerId functionality. The bug, which was causing issues with retrieving the dealer ID, has been fixed.
## 8.65.0 (04.09.2023)

### Added
- Add addMailgunHeaders to EllegiFinalIssuerAccounting emails: This update adds the functionality to include Mailgun headers to the emails sent by the EllegiFinalIssuerAccounting module. By including these headers, the EllegiFinalIssuerAccounting emails can be better monitored and analyzed, ensuring reliable email delivery and improving overall email management.

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- Apply php-cs-fixer to codebase: This update involves applying the php-cs-fixer tool to the project's codebase. 

## 8.64.0 (30.08.2023)

### Add
- Add .php-cs-fixer.php: This update involves the addition of a .php-cs-fixer.php file to the project. By adding this file to the project, it allows developers to define and enforce coding standards and formatting rules for the PHP codebase.

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- Huge code global refactoring: This update involves a massive refactoring of the system's codebase. The refactoring process focuses on improving the overall structure, organization, and efficiency of the code.

## 8.63.0 (29.08.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- appCacheBusting update: This update involves an update to the appCacheBusting functionality. The appCacheBusting feature is responsible for managing and updating the cache of the application to ensure that users always have access to the latest version. This update may include enhancements to the cache management system.
- DealerExtraServices refactoring: This update focuses on the refactoring of the DealerExtraServices functionality within the system. The refactoring process aims to improve the organization, efficiency, and reliability of the dealer extra services feature. 

### Fixed
- SimulationRequestActions bug fixing: This update addresses and fixes the bugs related to SimulationRequestActions. These bug fixes aim to resolve any issues or errors encountered during the simulation request process. 

## 8.62.0 (28.08.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- EllegiFinalIssuerAccounting refactoring: This update focuses on the refactoring of the EllegiFinalIssuerAccounting functionality within the system. The refactoring process aims to improve the organization, efficiency, and reliability of the final issuer accounting feature. 

## 8.61.0 (08.08.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- AccountingEvent refactoring: This update involves the refactoring of the AccountingEvent functionality within the system. The refactoring process focuses on improving the organization, efficiency, and reliability of the accounting event feature.

## 8.60.0 (07.08.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- Huge code global refactoring: This update involves a massive refactoring of the system's codebase. The refactoring process focuses on improving the overall structure, organization, and efficiency of the code.

## 8.59.0 (01.08.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- Huge code global refactoring: This update involves a massive refactoring of the system's codebase. The refactoring process focuses on improving the overall structure, organization, and efficiency of the code.

## 8.58.0 (11.07.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- Huge code global refactoring: This update involves a massive refactoring of the system's codebase. The refactoring process focuses on improving the overall structure, organization, and efficiency of the code.
- QuotationPayment refactoring: This update focuses on the refactoring of the QuotationPayment functionality within the system. The refactoring process involves restructuring and optimizing the codebase related to quotation payments. 

## 8.57.0 (10.07.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- Huge code global refactoring: This update involves a massive refactoring of the system's codebase. The refactoring process focuses on improving the overall structure, organization, and efficiency of the code.

## 8.56.0 (07.07.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- Huge code global refactoring: This update involves a massive refactoring of the system's codebase. The refactoring process focuses on improving the overall structure, organization, and efficiency of the code.
- QuotationPayment refactoring: This update focuses on the refactoring of the QuotationPayment functionality within the system. The refactoring process involves restructuring and optimizing the codebase related to quotation payments. 

## 8.55.0 (05.07.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- Huge code global refactoring: This update involves a massive refactoring of the system's codebase. The refactoring process focuses on improving the overall structure, organization, and efficiency of the code.
- Mailbox refactoring: This update involves a refactoring of the mailbox functionality within the system. The refactoring process focuses on improving the organization, efficiency, and user experience of the mailbox feature. 

## 8.54.0 (04.07.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- Huge code global refactoring: This update involves a massive refactoring of the system's codebase. The refactoring process focuses on improving the overall structure, organization, and efficiency of the code.

## 8.53.0 (03.07.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- Huge code global refactoring: This update involves a massive refactoring of the system's codebase. The refactoring process focuses on improving the overall structure, organization, and efficiency of the code.

## 8.52.0 (30.06.2023)

### Added
- Add Invoice system: This update introduces a new feature called the Invoice system. The Invoice system enables users to create, manage, and track invoices within the system. 
- Add feature-signature-request-mail: This update introduces a new feature called feature-signature-request-mail. The feature allows users to receive email notifications when a signature request is sent or completed.
- Already present Debit Note check: This update includes a check to ensure that a Debit Note is not already present before creating a new one. The check prevents duplicate or redundant Debit Notes from being generated, ensuring data integrity and accuracy within the system.
- Add Assiclick Debit Note: This update introduces the Assiclick Debit Note feature. The Assiclick Debit Note allows users to generate and manage Debit Notes specifically related to Assiclick transactions. 
- Add Assiclick Create Debit Note Nova Action: This update adds a new Nova Action called Assiclick Create Debit Note. The Nova Action provides a convenient interface for users to create Debit Notes specifically for Assiclick transactions. 
- Add CreateAssiclickCreateDebitNote Job: This update introduces a new job called CreateAssiclickCreateDebitNote. The job automates the process of creating Debit Notes for Assiclick transactions. 

### Changed
- SignatureRequest blade refactoring: This update focuses on refactoring the SignatureRequest blade template. The refactoring process involves restructuring and optimizing the template to improve its readability, maintainability, and performance.
- Test on signer.sendRequest: This update involves conducting tests on the signer.sendRequest functionality. 
- Invoice Backend update: This update focuses on updating the backend functionality of the invoicing system. The update includes enhancements to the invoice management process, such as improved validation, error handling, and data processing.
- Remove Iban in Assiclick PDF footer: This update involves removing the Iban information from the Assiclick PDF footer. 
- Quotation request assistance refactoring: This update focuses on refactoring the quotation request assistance functionality. The refactoring process aims to improve the overall performance, reliability, and user experience when handling quotation requests.

## 8.51.0 (22.06.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- Huge code global refactoring: This update involves a massive refactoring of the system's codebase. The refactoring process focuses on improving the overall structure, organization, and efficiency of the code.

## 8.50.0 (21.06.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.

## 8.49.0 (20.06.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- Huge code global refactoring: This update involves a massive refactoring of the system's codebase. The refactoring process focuses on improving the overall structure, organization, and efficiency of the code.

## 8.48.0 (15.06.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- Huge code global refactoring: This update involves a massive refactoring of the system's codebase. The refactoring process focuses on improving the overall structure, organization, and efficiency of the code.

## 8.47.0 (14.06.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- Huge code global refactoring: This update involves a massive refactoring of the system's codebase. The refactoring process focuses on improving the overall structure, organization, and efficiency of the code.

## 8.46.0 (13.06.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- Huge code global refactoring: This update involves a massive refactoring of the system's codebase. The refactoring process focuses on improving the overall structure, organization, and efficiency of the code.

## 8.45.0 (12.06.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- Huge code global refactoring: This update involves a massive refactoring of the system's codebase. The refactoring process focuses on improving the overall structure, organization, and efficiency of the code.

## 8.44.0 (11.06.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- Huge code global refactoring: This update involves a massive refactoring of the system's codebase. The refactoring process focuses on improving the overall structure, organization, and efficiency of the code.

## 8.43.0 (10.06.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- Huge code global refactoring: This update involves a massive refactoring of the system's codebase. The refactoring process focuses on improving the overall structure, organization, and efficiency of the code.

## 8.42.0 (09.06.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- Huge code global refactoring: This update involves a massive refactoring of the system's codebase. The refactoring process focuses on improving the overall structure, organization, and efficiency of the code.

## 8.41.0 (08.06.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- Huge code global refactoring: This update involves a massive refactoring of the system's codebase. The refactoring process focuses on improving the overall structure, organization, and efficiency of the code.

## 8.40.0 (05.06.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- DailyQuotationsEmittedNotifications refactoring: This update focuses on refactoring the DailyQuotationsEmittedNotifications feature. The refactoring process involves restructuring and optimizing the code to improve the performance, readability, and maintainability of this feature. 

## 8.39.0 (04.06.2023)

### Changed
- Update laravel-notification-channels/telegram: This update focuses on updating the laravel-notification-channels/telegram package. 
- Telegram notifications refactoring: This update involves a refactor of the Telegram notifications feature.
- Vonage instead of Nexmo: This update replaces the Nexmo service with Vonage for certain functionalities. 

### Fixed
- Fixed String helper: This update addresses a bug or issue related to the String helper functionality.

## 8.38.0 (29.05.2023)

### Changed
- Update SellerBooleans: This update involves a modification to the SellerBooleans feature. Previously, the feature relied on the dealer target commissions value to determine specific seller behaviors and conditions. However, with this update, the SellerBooleans feature now utilizes the dealer commissions value instead. 

## 8.37.0 (27.05.2023)

### Changed
- MOL value calculation update: This update focuses on the MOL (Margin of Loss) value calculation. This update introduces improvements to the MOL value calculation algorithm, ensuring more accurate and reliable results.

## 8.36.0 (26.05.2023)

### Changed
- OldNewsPostsReadUpdate formatting: This update focuses on formatting improvements for the OldNewsPostsReadUpdate feature.
- DealersUserMaker dealerClickSystemEmail for master dealer user instead dealer email: This update involves a modification to the DealersUserMaker feature. Specifically, it changes the method of sending system emails for master dealer users. Instead of using the dealer email address, the update introduces the dealerClickSystemEmail functionality.

## 8.35.0 (25.05.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- getSignedCollectionMedia refactoring: This update involves refactoring the getSignedCollectionMedia function. 
- ProductRequestsSignedMedia refactoring: This update focuses on refactoring the ProductRequestsSignedMedia functionality. 
- BookingQuotationProductRequestPdf refactoring: This update involves refactoring the BookingQuotationProductRequestPdf functionality. 

### Fixed
- Fixed QuotationEvent bug relative to changeStateToBooked function: This update addresses a bug in the QuotationEvent related to the changeStateToBooked function. The bug caused incorrect behavior when changing the state of a quotation to "booked".

## 8.34.1 (24.05.2023)

### Fixed
- Backend bug fixing on DealerProductMarkup: This update focuses on resolving bugs in the backend related to the DealerProductMarkup feature. The bugs identified in the DealerProductMarkup functionality have been investigated and fixed.

## 8.34.0 (23.05.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- Claims service refactoring: This update focuses on refactoring the Claims service within the system. The claims service is responsible for handling and processing insurance claims. The codebase of the claims service has been reviewed and optimized to improve its structure, performance, and maintainability.

## 8.33.0 (22.05.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- calculateIssuerEmissionFeesValue refactoring: This update focuses on refactoring the calculateIssuerEmissionFeesValue function. The function responsible for calculating the issuer emission fees has been optimized and improved.
- DealerInternalGroupIssuer refactoring: This update involves a comprehensive refactoring of the DealerInternalGroupIssuer module. The module's codebase has been reviewed and redesigned to improve its structure, performance, and maintainability.

## 8.32.0 (21.05.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- DealerInternalGroupIssuer renaming attributes: This update involves renaming certain attributes in the DealerInternalGroupIssuer module. 
- Issuer fees and refactoring: This update includes enhancements and refactoring to the Issuer fees feature. 

## 8.31.0 (20.05.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.

## 8.30.0 (19.05.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- Sbaiz instead of Gianzini in Ellegi documents: This update replaces the name "Gianzini" with "Sbaiz" in the Ellegi documents. The change ensures that the correct name is used consistently throughout the Ellegi documents.
- Refactoring Issuer fees: This update involves a refactoring of the Issuer fees feature. The codebase related to calculating and managing issuer fees has been optimized and restructured, resulting in improved performance and reliability.
- Product commissions refactoring: In this update, we have performed a comprehensive refactoring of the product commissions feature. The codebase related to calculating and managing product commissions has been optimized and restructured, resulting in improved performance and accuracy. 

## 8.29.0 (18.05.2023)

### Added
- Add under-observation-notice to simulation: This update introduces a new feature called "under-observation-notice" to the simulation module. Admin users can now include an under-observation notice in the simulation results, providing additional information or warnings to users when analyzing the simulation data.
- Add logic to manage the print of EllegiCoveaSicuraCvt PDF: This update introduces new logic to manage the printing of the EllegiCoveaSicuraCvt PDF.

### Changed
- Update EllegiCoveaSicuraCvt: This update includes an update to the EllegiCoveaSicuraCvt module.
- Update policy.blade.php: With this update, the policy.blade.php file has been updated. 
- Update policy_30.blade.php: This update involves an update to the policy_30.blade.php file.
- Update AutovipZeroFranchigiaImport: This update brings improvements or updates to the AutovipZeroFranchigiaImport module. 
- Adjustments to EllegiCoveaSicuraCvt pdf: This update comprises adjustments made to the EllegiCoveaSicuraCvt pdf file.

### Fixed
- Delete installed-fonts.json and fix a typo in fonts path: This update involves the deletion of the installed-fonts.json file, which is no longer needed. Additionally, a typo in the fonts path has been fixed.
- Fixed a bug on EllegiCoveaSicuraCvt displayed price: This update addresses a specific bug related to the displayed price in the EllegiCoveaSicuraCvt module. The bug has been identified and fixed, ensuring that the displayed price accurately reflects the calculations and data within the module.

## 8.28.0 (17.05.2023)

### Added
- Add dealer underObservationPublicText: This update includes the addition of a new feature called "dealer underObservationPublicText." With this enhancement, admin users can now provide additional information or messages that will be displayed publicly, allowing better communication with customers and improving transparency.

### Changed
- DealerProductMarkup refactoring: In this update, we have performed a comprehensive refactoring of the DealerProductMarkup feature. The codebase related to the markup calculations for dealer products has been optimized and restructured, resulting in improved performance and accuracy. 
- Huge refactoring con calculation engine: This update involves a significant refactoring of the calculation engine.

## 8.27.0 (16.05.2023)

### Added
- Add login2 access page for golem system: This update introduces a new login2 access page for the golem system. 


## 8.26.0 (15.05.2023)

### Added
- Add appStaticUrl: With this update, we have added the appStaticUrl feature to the system. This new functionality allows users to access static content and resources securely and efficiently.

### Fixed
- Commissions bug fixed: This update addresses a bug related to commissions. The issue has been identified and resolved, ensuring that commission calculations are accurate and consistent within the system.
- DealerPolicy bug fixed: This update resolves a bug related to the DealerPolicy feature. The issue has been identified and fixed, ensuring that the DealerPolicy functionality works as intended.


## 8.25.0 (12.05.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- Commissions refactoring: This update includes a refactoring of the commissions feature in our system. The codebase related to commissions has been restructured and optimized to improve performance and maintainability. 
- Dealer commissions refactoring: In this update, we have specifically focused on refactoring the dealer commissions feature. The code related to dealer commissions has been reorganized and optimized to enhance its functionality and efficiency.

## 8.24.0 (11.05.2023)

### Changed
- Backend update: This update includes an update to the backend of our system. This update may involve various improvements, such as performance optimizations, security enhancements, bug fixes, and the implementation of new features.
- Dealer commissions refactoring: We have performed a refactoring of the dealer commissions feature. This refactoring involves restructuring and reorganizing the codebase related to dealer commissions.
- Helpers refactoring: In this update, we have implemented a refactoring of the helpers module. The helpers module contains various utility functions and methods that assist in the overall system functionality.

## 8.23.0 (09.05.2023)

### Added
- Add plate number to emitted quotation dealer view page: In this update, we have introduced the addition of the plate number to the emitted quotation dealer view page. This enhancement allows dealers to easily identify and track the specific plate number associated with each emitted quotation. 

### Fixed
- Bug fixed: As part of our commitment to providing a seamless user experience, we have addressed and resolved a bug. This bug fix ensures that the system functions as intended, eliminating any unexpected errors or malfunctions. 

## 8.22.0 (04.05.2023)

### Added
- Add DealerProductOrderingRule to calculation engine: The calculation engine has been updated to include the new DealerProductOrderingRule. This rule allows dealers to define specific ordering rules for their products, providing more control over the ordering process. 
- Add coverages_without_exclude_or rule to calculation engine: Another addition to the calculation engine is the coverages_without_exclude_or rule. This rule enables users to calculate coverages without considering any exclusions. 

## 8.21.0 (28.04.2023)

### Added
- Add changePcl action to change quotation price on dealer request: With this update, a new action called "changePcl" has been introduced to the system specifically for dealer requests. This action enables admin users to modify the price of a quotation based on dealer requirements. 

### Changed
- Calculation engine refactoring: The calculation engine has undergone a significant refactoring process. This update improves the performance, reliability, and maintainability of the calculation engine, ensuring more accurate and efficient calculations across the system. The refactoring process involves restructuring and optimizing the codebase, resulting in a more robust and streamlined calculation engine that can handle complex calculations with ease.
  
## 8.20.0 (27.04.2023)

### Added
- Add marketing_setaside attribute to Nova dealer page: The Nova dealer page has been enhanced with the addition of a new attribute called "marketing_setaside". This attribute allows dealers to set aside a specific amount of their marketing budget for promotional activities.

### Changed
- Calculation engine refactoring: The calculation engine has undergone a significant refactoring process. This update improves the performance, reliability, and maintainability of the calculation engine, ensuring more accurate and efficient calculations across the system. The refactoring process involves restructuring and optimizing the codebase, resulting in a more robust and streamlined calculation engine that can handle complex calculations with ease.

### Fixed
- Bug fixed: A bug that was affecting the system has been fixed. This bug was causing an issue or malfunction in the system, impacting its performance or functionality. 

## 8.19.0 (26.04.2023)

### Added
- Add QuotationFlowsQuotationDataObserver: A new observer, QuotationFlowsQuotationDataObserver, has been added to the system. This observer tracks and monitors changes in quotation data within the quotation flows. By adding this observer, the system can now effectively capture and respond to changes in quotation data, allowing for better visibility and control over the quotation flows. 

### Changed
- Calculation engine refactoring: The calculation engine has undergone a significant refactoring process. This update improves the performance, reliability, and maintainability of the calculation engine, ensuring more accurate and efficient calculations across the system. The refactoring process involves restructuring and optimizing the codebase, resulting in a more robust and streamlined calculation engine that can handle complex calculations with ease.


## 8.18.0 (20.04.2023)

### Added
- Add booked quotation clone for superhero user: A new feature has been added that allows superhero users to clone booked quotations. This functionality enables superhero users to easily create duplicate copies of their booked quotations, saving them time and effort. By cloning a booked quotation, superhero users can quickly create similar quotations without having to manually input all the details again. 

## 8.17.0 (18.04.2023)

### Changed
Better text for saved quotations index page: The text displayed on the saved quotations index page has been improved. This update enhances the clarity and readability of the text, providing users with a more user-friendly and informative experience.

### Fixed
- standAloneTitle bug fixed: A bug related to the standAloneTitle feature has been resolved. This bug fix ensures that the standAloneTitle behaves correctly and functions as intended. 

## 8.16.0 (17.04.2023)

### Fixed
- Bug fixed: A bug has been identified and resolved. This fix addresses an issue or error that was affecting the system's functionality or performance. 

## 8.15.0 (13.04.2023)

### Added
- Add fee to EllegiFinalIssuerAccounting: A new feature has been added to the EllegiFinalIssuerAccounting module. This update introduces the ability to include fees in the accounting calculations for final issuers. 

## 8.14.0 (12.04.2023)

### Changed
- Update DealerAccountingEllegiWeekObserver: The DealerAccountingEllegiWeekObserver has been updated to improve its functionality and performance. This update includes enhancements to the observer, allowing it to efficiently track and manage accounting data related to dealers.
- Remove notStandalone to applyValueRangeRules: In order to enhance the value range rules functionality, the "notStandalone" condition has been removed. This change ensures that the value range rules are applied consistently and accurately, without any unnecessary restrictions or limitations.

### Fixed
- Typoes fixed: Several typographical errors have been identified and fixed. These errors could have caused confusion or misinterpretation of certain texts or labels within the system. 

## 8.13.0 (11.04.2023)

### Added
- Add SendDealerAccountBalanceMail: A new feature, SendDealerAccountBalanceMail, has been added to the system. This feature enables the system to automatically send account balance emails to dealers. 

### Changed
- DealerAccountingEllegiWeekObserver update: The DealerAccountingEllegiWeekObserver has been updated to improve its functionality and performance. This update includes enhancements to the observer, allowing it to efficiently track and manage accounting data related to dealers.

### Fixed
- Rounded product_emission_fees value bug fixed: A bug related to the rounding of product_emission_fees values has been identified and fixed. This bug was causing incorrect calculations or display of emission fees for products.

## 8.12.0 (06.04.2023)

### Changed
- Import actions update: The import actions have been updated to enhance their functionality and usability. This update includes improvements to the import process, making it more efficient and effective. 

### Fixed
- Bug fixed: This update addresses a bug that was identified and fixed. The bug was causing an issue or malfunction in the system, impacting the user experience.

## 8.11.0 (05.04.2023)

### Changed
- Update WorkableDoneQuotation actions: The WorkableDoneQuotation actions have been updated to improve their functionality and effectiveness. This update includes enhancements to the actions related to completing and finalizing quotations in the Workable system. 

## 8.10.0 (04.04.2023)

### Changed
- Update upselling google sheets jobs: The Google Sheets integration has been updated to improve the functionality and performance of jobs related to Google Sheets.

## 8.9.0 (03.04.2023)

### Changed
- Update google sheets jobs: The Google Sheets integration has been updated to improve the functionality and performance of jobs related to Google Sheets.
- Language update: The application's language support has been updated to include additional languages or to improve the existing language translations. 

### Fixed
- Fixing confirmValues() fresh bug: A bug related to the "confirmValues()" function has been identified and resolved. Previously, there was an issue that caused unexpected behavior or errors when using the "confirmValues()" function in certain scenarios. 

## 8.8.0 (30.03.2023)

### Added
- Add actions to Dealer, DealersUser and SellersUser: New actions have been added to the Dealer, DealersUser, and SellersUser modules. 

### Fixed
- Fixed AdminMustLogout: An issue with the AdminMustLogout feature has been resolved. Previously, there was a bug that prevented the proper forced logout of admin users.

## 8.7.0 (29.03.2023)

### Added
- Add customer_with_effect_date_and_place blade: A new blade template called customer_with_effect_date_and_place has been added. This template provides a user-friendly interface for displaying customer information along with their effective date and place of interaction.

## 8.6.0 (28.03.2023)

### Added
- Add EmailValidation rule: A new EmailValidation rule has been added to ensure that email addresses entered by users are valid and meet the required format.
- Add Authentication logs to DealersUser: Authentication logs have been added to the DealersUser system, allowing for better tracking and monitoring of user authentication activities.
- Add serviceEmailValidatorInternal: A new service called serviceEmailValidatorInternal has been added, providing internal email validation capabilities to ensure the accuracy and integrity of email addresses within the system.

### Changed
- Update password-generator: The password generator feature has been updated, improving its functionality and generating stronger and more secure passwords.

## 8.5.0 (27.03.2023)

### Changed
- Crypt DealersUsers password: The password of DealersUsers is now encrypted to enhance security and protect user credentials.
- Update NovaInfoNotification: NovaInfoNotification has been updated with new information to improve the notification system.
- Deactivate Telescope for production: The Telescope feature has been deactivated for production, ensuring a smoother and more stable production environment.

## 8.4.0 (26.03.2023)

### Added
- Add is_compliant to systemCreate seller: The ability to specify the compliance status of a seller has been added to the systemCreate seller feature, allowing for better tracking and management of seller compliance.

### Changed
- Crypt SellersUsers passwords: The passwords of SellersUsers are now encrypted for enhanced security and protection of user data.
- SellersUser actions update: Updates have been made to the actions available for SellersUsers, improving functionality and user experience.
- Password generator refactoring: The password generator has undergone refactoring, optimizing its code and improving its performance.

## 8.3.0 (24.03.2023)

### Added
- Add PasswordGenerator service: Introduction of a new PasswordGenerator service for generating strong and secure passwords.

### Changed
- Admin creation update: Improvements made to the admin creation process, enhancing user interface, security measures, and workflows.
- AutovipZeroFranchigiaImport update: Updates to the AutovipZeroFranchigiaImport feature, including bug fixes, performance enhancements, and additional functionalities for a smoother import process.

## 8.2.0 (17.03.2023)

### Added
- Add METANO to AutovipZeroFranchigiaImport: The METANO option has been added to the AutovipZeroFranchigiaImport feature, providing users with the ability to import and manage data related to METANO.
  
### Changed
- updateOrCreate for ValidatedEmail: The updateOrCreate method has been implemented for ValidatedEmail, allowing users to easily update or create new validated email records in the system.

## 8.1.0 (12.03.2023)

### Added
- Added the "ellegiFinancialAdvisor" permissions. This new permission allows designated users to access and perform specific actions related to financial advising within the system. This addition enhances the flexibility and control over user roles and permissions, providing a more tailored user experience for financial advisors.

## 8.0.1 (11.03.2023)

### Fixed
- Fixed a bug related to the Yousign signer feature. The bug was specifically related to handling the "&" character. With this fix, the system now correctly handles the "&" character when using the Yousign signer, ensuring a smooth and error-free experience. This update improves the overall reliability and functionality of the Yousign signer feature.

## 8.0.0 (10.03.2023)

### Added
- Launched Electronic Signature System: We have introduced a new electronic signature system, allowing users to digitally sign documents and contracts. This feature streamlines the signing process, eliminates the need for physical signatures, and enhances efficiency and convenience.
- Launched Email Validation System: We have implemented an email validation system to ensure that all email addresses entered in the system are verified and valid. This system helps prevent errors and inaccuracies in email communication, ensuring reliable and successful delivery of important messages.
- Launched Import Engine System: We have introduced a robust Import Engine system that facilitates smooth and efficient data imports into the system. This feature allows users to import large volumes of data quickly and accurately, saving time and effort in manual data entry.

## 8.1.5-RC (10.03.2023)

### Changed
- Addressed various typos within the system. These corrections enhance the overall quality and professionalism of the system by ensuring that text and content are free from spelling or grammatical errors.
- Updated permissions within the system. These updates refine and adjust the access rights and privileges for different user roles, ensuring appropriate levels of access and control for each user.

### Fixed
- Fixed a bug related to the registration date. This bug fix ensures that the registration date is accurately recorded and displayed for each user, providing correct information about their registration.
- Resolved an issue with the customer string. This fix ensures that the customer's information is displayed correctly and accurately throughout the system, eliminating any inconsistencies or errors.
- Fixed an issue with email validation during data import. This fix ensures that email addresses are correctly validated when importing data, preventing any incorrect or invalid email addresses from being imported into the system.
- Corrected the signer data for legal entity customers. This fix ensures that the signer data for legal entity customers is accurately recorded and associated with the correct account, providing correct and reliable information for legal purposes.

## 8.1.4-RC (09.03.2023)

### Added
- Added a new permission for database notifications. This permission allows users to receive important notifications and updates directly within the system, ensuring timely and relevant information.
- Added the "mil_active" attribute to the Dealer entity. This addition provides a new level of functionality and control related to dealership management, allowing for better tracking and management of dealerships.
### Changed
- Refactored the QuotationData Email functionality to improve its performance and reliability. This refactoring enhances the system's ability to handle and process email communication related to quotation data.
- Updated the webhooks mail jobs to optimize their functionality. This update improves the handling of webhooks and ensures that email-related tasks associated with webhooks are executed efficiently.
- Work in progress (WIP) has been done on the queues. This indicates ongoing improvements and refinements to enhance the system's queue management and optimize its performance.
- Work has been done on translations to improve localization and language support. This ensures that the system can cater to users in different regions and languages, providing a seamless multilingual experience.
### Fixed
- Fixed the issue with sending email batch events when they are pending. This ensures that emails are sent out smoothly and without any delays.
- Fixed a bug related to the user's "canBuy" session. This bug fix resolves issues that prevented users from making purchases or transactions within the system, ensuring a smooth and uninterrupted user experience.

## 8.1.3-RC (08.03.2023)

### Added
- A new value, USATO to AutovipZeroFranchigiaImport, has been added. This value provides additional options and flexibility within the system, allowing users to better categorize and manage their data.
- The dealerClickDataStreamEmail has been added, providing a streamlined communication channel for dealerships. This addition facilitates the exchange of important information and updates between dealerships and the system.
### Changed
- Permissions have been updated to ensure proper access control and security measures. These updates help in maintaining data confidentiality and prevent unauthorized access.
- UI (User Interface) has been improved by fixing any visual inconsistencies or layout issues. These enhancements result in a more visually appealing and user-friendly interface, making it easier for users to navigate and interact with the system.
- The quotation booked index has been enhanced by adding the plate and VIN (Vehicle Identification Number) information. This addition provides a more comprehensive overview of the booked quotations, enabling better tracking and management of vehicle-related data.
### Fixed
- Various general fixes have been implemented to address any issues and improve the overall performance and stability of the system. These fixes ensure a smoother user experience and enhance system reliability.
- The GPL type has been fixed.

## 8.1.2-RC (01.03.2023)

### Added
- A ValidatedEmail Nova resource has been added to ensure that only valid email addresses are used within the system. This helps improve data accuracy and reduces the risk of errors.
- Nova now includes Electronic signature resources, allowing users to add digital signatures to their documents. This feature enhances security and provides a convenient way to authenticate and verify the content.
- New policies have been implemented to enhance system management and ensure a safer and more customized user experience. These policies help define rules and guidelines for accessing and using the Nova system.
### Changed
- A composer update has been performed to ensure that all dependencies in the system are up to date. This helps improve compatibility, performance, and security by incorporating the latest updates and bug fixes.
### Fixed
- An issue with hsla (Hue-Saturation-Lightness-Alpha) has been fixed. This ensures that colors are displayed correctly within the system, providing a more visually appealing and consistent user interface.

## 8.1.1-RC (28.02.2023)

### Changed

-   The method handleQuotationStatusBannerUi was changed from private to public.

### Fixed

- Fixed customer quotation page bug: A bug related to the customer quotation page has been identified and resolved. Previously, there was an issue that caused unexpected behavior or errors when customers accessed the quotation page.

## 8.1.0-RC (28.02.2023)

### Added

-   Added ZerobounceBatchValidation class to validate batch email addresses.
-   Added main_email_authorized field in customers table and Customer model, which is used for authorized emails check (mainly role-based).

### Changed

-   Updated EmailValidator::validate() method to handle new status "catch-all" and subStatus "antispam_system". Also added a new static method called validateBatch().
-   Updated RelationshipsCustomerBooleans trait with customerHasAuthorizedMainEmail() function that checks if its customer has authorized main email address or not.

## 8.0.1-RC (27.02.2023)

### Fixed

- Fixed DomPdf installed-fonts bug: A bug related to the installed fonts in DomPdf has been identified and resolved. Previously, there was an issue that caused incorrect rendering or missing fonts when generating PDF documents using DomPdf library.

## 8.0.0-RC (24.02.2023)

### Added

-   Yousign service

## 7.42.0 (27.01.2023)

### Added

-   Added the customer birthdate, birthplace and country to Covea Zero Deductibles policies.

### Fixed

-   Fixed a bug in EllegiCoveaZeroDeductibles::create50() where $quotationCoverage was not defined when no coverages were found for that product id (it should be null).

## 7.41.0 (25.01.2023)

### Added

-   Added is_emissions_office_complete to dealers users table
-   Added the new field in DealersUser model and its scopes
-   Added a new role called Emissions Office Complete

### Changed

-   Updated Nova/Resources/DealersUser resource with a boolean for this new field
-   Updated DealerClickSessionData trait, adding the value of this new field into session data array (isEmissionsOfficeComplete)
-   Update UserBooleans trait, adding a method that checks if user has emissions office complete role or not (isEmissionsOfficeComplete())
-   Changed the visibility of some columns in tables for users with different roles
-   Updated home page to show/hide certain elements based on user's role

## 7.40.0 (24.01.2023)

### Changed

-   The variables ibarVariationCommissions and pclCommissionsPercentage were not being used in the code, so they were removed from it.

### Fixed

-   Fixed the Grand Total Commission calculation when the Dealer uses taxable commissions percentages

## 7.39.0 (24.01.2023)

### Changed

-   The selected option is now disabled by default.

### Fixed

-   Fixed a problem with the Extra Data Field that didn't allow to select the correct option in the select tag.

## 7.38.0 (13.01.2023)

### Changed

-   Settings refactoring

## 7.37.0 (09.01.2023)

### Added

-   Added a new input mask (uthousand) so that a negative value cannot be entered into the extraServiceTotalPrice field.

### Changed

-   The alias 'thousands' was changed to 'uthousands'.

## 7.36.0 (09.01.2023)

### Changed

-   Corrected modal identifier so that customer type can be changed.
-   The id of the input field was changed from quotationSave_individual to quotationSaving_individual
-   In function legalEntityValidation() and in function quotationSavehandleLegalForm(),the selector for #quotationSave_individual has been replaced with #quotationSaving_individua

## 7.35.0 (09.01.2023)

### Added

-   Added a new function to the Time.php file
-   Added new resources to export data for the new gruoup Google Sheets.
-   Added IssuerActions trait to the issuer model
-   Added QuotationTaskBooleans and removed it from the relationships in order to avoid circular dependency with quotation task collection
-   Added year parameter to update and clearAndUpdate methods in AssiclickGoogleSheet class.
-   Added year parameter to update and clearAndUpdate methods.
-   Added year parameter to update and multipleUpdate methods.
-   Added a new method to update the google sheet for each year.
-   Add $issuer->syncGoogleSheets(); and $dealerOffice->dealer->syncGoogleSheets(); in IssuerObserver and DealerOfficeObserver respectively;
-   Created IssuerActions trait to sync issuer data with google sheets when it is updated or created, and added the method call on create/update methods of Issuer model observer class;
-   Added new sheets for 2022 and 2023

### Changed

-   Removed DealerResource class from Google Sheets folder
-   Removed IssuerResource class from Google Sheets folder
-   Removed ProductResouce class from Google Sheets Folder
-   Removed QuotationResourceByProduct class
-   Updated the config values for assiclick google sheet dues, old dues and margins sheets with new years (2020-2021).
-   Updated multipleUpdate method with new parameters for the updatedData function call.
-   Removed old functions (updateOld, clearAndUpdateOld, multipleClearAndUpdatetOld).
-   Updated all methods that were using old sheets, now they use the current year's one instead of hardcoding it in config file and then passing it as parameter to GoogleSheet class' static functions (updateData(), multipleUpdateData()).
-   Removed unused code from EllegiGoogleSheet class: clearAndUpdateOld().
-   Updated the sheet name with $year variable in both methods.
-   Remove GoogleSheetAccounting::updateProduct($product);
-   Update QuotationController@store method to call sync methods of new google sheet classes created above when a quotation is saved or updated (real simulation). This will be done only if it's a real simulation with an emission date greater than 2019-12-31 00:00:00 UTC+0 timezone (this was set because we don't have data before this date on these spreadsheets);
-   Refactored QuotationTaskObserver class: now we have one update for each quotation type instead of only one that updates all types at once; also removed unused code from this file;
-   Removed duplicate code from QuotationNumbers trait by creating realEmittedYear() method which returns year value based on real emitted date attribute if present, otherwise null will be returned as before;
-   Removed old sheet from 2021

### Fixed

-   Fixed a typo in DealerActions trait (accounting_pec).

## 7.34.0 (30.12.2022)

### Added

-   Add dealer contract generation system

## 7.33.0 (12.12.2022)

### Added

-   Added searchable fields to DealerAccountingEllegi
-   Added name field as a searchable field in DealerComplete

## 7.32.0 (08.12.2022)

### Added

-   Added a new component to request the withdrawal of an insurance policy
-   Added a new function to the String helper
-   Created TrainingController with index(), show() and pdf() methods (and related views)
-   Created models: TrainingPost, TrainingPostCategory, TrainingPostQuestion ... etc...etc..

### Changed

-   Modified QuotationsController@hasAction method in order to allow the withdraw action on emitted quotations (emitted, self-emitted and compliant)

## 7.31.0 (07.12.2022)

### Added

-   Added searchable fields to DealerAccountingEllegi
-   Added name field as a searchable field in DealerComplete

## 7.30.0 (06.12.2022)

### Added

-   Added a new component to request the withdrawal of an insurance policy

### Changed

-   Modified QuotationsController@hasAction method in order to allow the withdraw action on emitted quotations (emitted, self-emitted and compliant)

## 7.29.0 (06.12.2022)

### Added

-   Added a new function to the String helper
-   Created TrainingController with index(), show() and pdf() methods (and related views)
-   Created models: TrainingPost, TrainingPostCategory, TrainingPostQuestion
-   Added a new resource TrainingPost
-   Added new resource for training post questions
-   Added traits to models: TrainingPost, TrainingPostCategory and TrainingPostQuestion
-   Updated OpeningHours component with randomTrainingPill variable (for tip tap)
-   Created the tables for Trix attachments (nova_pending_trix_attachments and nova_trix_attachments)
-   Added two filesystems to config/filesystems.php: trainingAttachments and novaAttachments, both pointing to AWS S3 buckets with different root folders
-   Added bottom bar component
-   Added training section
-   Added disclosures section
-   Added a new route group for training
-   Added dealer details partial view in training show blade file
-   Added random pillole di DealerClick card on main page of Training Section

### Changed

-   Changed the home page for dealers and dealer admins, adding random training pill data
-   Updated the NewsPost to use Tiptap instead of NovaTinyMCE
-   Removed unused trait MedialibraryFields from NewsPost and added it in both resources where needed (NewsPosts, TrainingPosts)
-   Changed notifications prefix from 'notifications' to 'messages' and changed all references in code accordingly (including tests)

## 7.28.0 (01.12.2022)

### Added

-   Add new migration for rename column in dealers table

### Changed

-   Rename legal representative contact person to first name and last name
-   Update dealer complete resource, lenses and actions with the changes above

## 7.27.0 (29.11.2022)

### Added

-   Added accounting_bonus and documents_bonus to dealers table
-   Added accounting bonus commissions percentage, ibar commissions percentage, pcl without bonuses commissiones percentage methods in DealerNumbers trait

### Changed

-   Issuer disclosure documents refactoring
-   Updated dealerPclCommissionsPercentage method in RelationshipsDealerNumbers trait
-   Updated PCL margin section of the contract pdf template (dealer/\_partials/pdf/shared/commissions)
-   Changed IBAN in Assiclick SRL bank account information from CARIGE to BPER (in Norme Amministrative).

### Fixed

-   Changed the currency symbol from html to thousands decimal

## 7.26.0 (28.11.2022)

### Added

-   Added a new method for calculating total price, which is used in all engines now instead of repeating code everywhere (and also added tax rate).
-   Added a new method for calculating taxable price, which is used in all engines now instead of repeating code everywhere.
-   A new method called calculateTotalPrice is used for calculating the total price (taxable + tax).
-   A new class WefoxScudoBrandNoAlarmType extends from the parent class WefoxScudo, which is a base calculation engine for all products of wefox company (WefoxCollision, WefoxGap).
-   Added new calculation engines for Wefox Scudo CVT products.
-   Added a function toPercentageIntString in String helper file, which is used by the newly added calculation engine files above and also other existing ones (WefoxScudoCvtSoloTotale).

### Changed

-   Refactored the calculation engine to make it more readable and maintainable.
-   Removed some unused methods from ProductCalculationEngine class that were not being called anywhere else anymore after refactorings above: handleRateValueWithShortage(), handleVehicleBuyingTypeRateValue().
-   Renamed other methods so they are easier to understand what they do: handleClass() -> handleGeoClass(); calculateTaxablePrice() -> calculateTotalPrice(). Also renamed variables where needed accordingly ($class => $geoClass; $taxablePrice => $totalPrice) .
-   The calculation of the taxable price has been refactored to use a new method called calculateTaxablePrice.
-   Some methods have been moved from ProductCalculationEngine class into CalculationEnginesHelper trait, so that they can be reused by other classes as well: handleGeoClass, handleRateValue and rounded function; this way we avoid code duplication in our application and make it more maintainable/extensible in future if needed; also some minor changes were made on these functions like adding $geoClass parameter to handleRateValue or changing round() with ceil().
-   The method calculate() was refactored to be more readable and maintainable.
-   Modified dateBase() function in Time helper file so that it returns null if no date was passed as parameter instead of today's date like before; this change affects all functions using this one: quotationResource(), quotationResourceByProduct().
-   Changed 'ANIMALI SELVATICI' label into 'ANIMALI SALVATICI' on Quotation resource class because there were some spelling mistakes with the original text provided by client; affected classes are: QuotationResource, QuotationResourceByProduct and their respective tests too (QuotationTest & QuotaionByProductsTest) . This change will affect both PDFs generated from quotations list page and Google Sheets export feature when exporting data related to DealerClick product coverages only since these two resources are being used exclusively for those purposes atm.

## 7.25.0 (26.11.2022)

### Added

-   Added a new route to test the contract pdf
-   Created a view for Ellegi's Contract PDF

### Changed

-   Tracking services update

### Fixed

-   toCurrencyStringHtml fixed

## 7.24.0 (26.10.2022)

### Changed

-   Update readme.md

## 7.23.0 (03.10.2022)

### Added

-   Added a new path for the customer contracts signed download

### Fixed

-   Fix Issue #211

## 7.22.0 (26.09.2022)

### Fixed

-   Fix Variable Type

## 7.21.0 (12.09.2022)

### Added

-   Add SendBookingQuotationIssuersBookingMail control

### Changed

-   Admin logo change
-   Removed DealerClick emails for booking and change vehicle delivery date
-   Email refactoring

### Fixed

-   Fixed News Corriere motori bug
-   Fixed Motori.it news feed bug

## 7.20.0 (06.09.2022)

### Changed

-   Change QuotationSystemRevoke as DestructiveAction Add electronic invoices data to Customer Add TextCopy to vehicle plate General refactoring

## 7.19.0 (02.09.2022)

### Added

-   Added accounting_pec and accounting_recipient_code attributes to the customer to manage the electronic invoices

## 7.18.0 (01.09.2022)

### Added

-   Add EllegiGoogleSheetFinancedContracts Add is_financed to Quotation

## 7.17.0 (31.08.2022)

### Changed

-   QuotationSystemRevoke instead of QuotationRevoke

## 7.16.0 (30.08.2022)

### Fixed

-   Fixed uppercase extension uploadDocuments bug

## 7.15.0 (29.08.2022)

### Added

-   Add calculation-engine-types

## 7.14.0 (26.08.2022)

### Added

-   Add Customer Accounting Contacts

## 7.13.0 (22.08.2022)

### Fixed

-   Fixed OpeningHours typo

## 7.12.0 (12.08.2022)

### Changed

-   Update PHP fixer

## 7.11.0 (11.08.2022)

### Added

-   Add signed contracts to customer front end

### Changed

-   QuotationEvent refactoring

## 7.10.0 (09.08.2022)

### Added

-   Add recipientMailCC to Quotation
-   Add QuotationInformationRequestDealerMail

## 7.9.0 (08.08.2022)

### Added

-   Add help desk quotations system

## 7.8.0 (06.08.2022)

### Added

-   Add QuotationFlowEngine

## 7.7.0 (02.08.2022)

### Added

-   Add InfodriveSatelliteAlarmObserver

### Changed

-   Updated jquery-validation
-   Test route refactoring
-   Harmonie Mutuelle policy pdf refactoring

### Fixed

-   Fixed handleAutoConfirmPriceQuotationCoverages bug
-   Fixed WorkableDoneQuotation::expirationString bug

## 7.6.0 (01.08.2022)

### Changed

-   AutoheroGoogleSheet refactoring

### Fixed

-   Fixed hasCustomerPayment issuersDues bug

## 7.5.0 (30.07.2022)

### Changed

-   Update simulation_expiration_at
-   Remove useless commands from kernel

## 7.4.0 (29.07.2022)

### Changed

-   General refactoring
-   Update Test Routes

## 7.3.0 (28.07.2022)

### Changed

-   Str::upper instead of strtoupper

### Fixed

-   Fixed payment_details pcl bug
-   Fixed payment_details_for_not_entrusted_dealer

## 7.2.0 (27.07.2022)

### Added

-   Add commercial agents dealer/seller notify system

### Changed

-   Style refactoring

### Fixed

-   Fix Nova Mediafile Interaction

## 7.1.0 (26.07.2022)

### Changed

-   Product name refactoring

### Fixed

-   Fixed QuotationCoverageAccessors bug

## 7.0.0 (25.07.2022)

### Added

-   Autohero
-   Add AutoheroGoogleSheet

### Changed

-   GoogleSheets refactoring

## 6.19.0 (24.07.2022)

### Changed

-   EllegiGoogleSheet refactoring
-   AssiclickGoogleSheetResource refactoring

### Fixed

-   Fixed hasServiceMasterIssuer

## 6.18.0 (23.07.2022)

### Changed

-   Payment processing refactoring

### Fixed

-   Fixed margins on emit bug

## 6.17.0 (22.07.2022)

### Added

-   Add Multiple Stripe Webhooks
-   Add Stripe AccountName to new StripeService
-   Add First Integration of Strype on multiple account
-   Add Multiple Stripe Configuration

## 6.16.0 (20.07.2022)

### Fixed

-   General fixin
-   Bug fixin

## 6.15.0 (19.07.2022)

### Added

-   Add Quotation Banner Message for Customer Document Receiver
-   Add Customer Contracts Download
-   Add reason to QuotationTransitionToCanceled action

### Changed

-   QuotationUi refactoring
-   Customer login UI refactoring
-   Customer mail update

### Fixed

-   Bug fixin

## 6.14.0 (18.07.2022)

### Added

-   Add Customer Action Section
-   Add Customer Banner Messagge and Action

### Changed

-   Update customer.php

### Fixed

-   Fixed only shopping cart products bug
-   Fixed typo
-   Bug fixin

## 6.13.0 (17.07.2022)

### Changed

-   General refactoring

## 6.12.0 (15.07.2022)

### Changed

-   Update emitted show isNotCustomerDocumentsReceiver

### Fixed

-   Fixed prices.js bug
-   Fixed CustomerMutators bug

## 6.11.0 (14.07.2022)

### Changed

-   Translations refactoring
-   Front end icons change
-   General refactoring

### Fixed

-   Fixed namable bug

## 6.10.0 (06.07.2022)

### Fixed

-   Fixing hasNotEntrustedSnapshotDealer bug

## 6.9.0 (04.07.2022)

### Added

-   Add syncGoogleSheets after changeStateToSelfEmitted

## 6.8.0 (01.07.2022)

### Changed

-   Front end icons change

## 6.7.0 (30.06.2022)

### Changed

-   General refactoring

## 6.6.0 (29.06.2022)

### Added

-   Add VehicleRetrieveCurrentPrice

## 6.5.0 (28.06.2022)

### Added

-   Add Dealer under observation system

## 6.4.0 (27.06.2022)

### Changed

-   General refactoring

### Fixed

-   Fixed translation emitted bug

## 6.3.0 (21.06.2022)

### Changed

-   Models scopes refactoring
-   Updated email subject for emitted quotations

### Fixed

-   Fix Issue #174 #176
-   Fixed missing file bug

## 6.2.0 (20.06.2022)

### Added

-   Add import single wallpaper

### Changed

-   Update translations
-   General refactoring
-   Update Quotation transitions dates
-   Front end messages update
-   Translations refactoring
-   Update mysql-schema.dump

### Fixed

-   Fixed dealer IBAR commissions confirm for stand alone quotations

## 6.1.0 (17.06.2022)

### Added

-   Add QR code to customer claims guide PDF

### Changed

-   QuotationPdfs refactoring

## 6.0.2 (16.06.2022)

### Fixed

-   Fixed handleAutoConfirmPriceQuotationCoverages

## 6.0.1 (14.06.2022)

### Added

-   Add admin route for customer pages
-   Add auto_confirm_final_price to Product

### Changed

-   Temp disabled claims menu
-   Customer website refactoring
-   EllegiCoveaZeroDeductibles refactoring
-   Update mapTestRoutes only on local environment
-   Update settings

### Fixed

-   Fixed assiclick negative margins on dealer commissions bug

## 6.0.0 (13.06.2022)

### Added

-   Add dealer claims

## 5.110.0 (12.06.2022)

### Fixed

-   Fixed float value on loans form

## 5.109.0 (11.06.2022)

### Changed

-   Incomplete quotation refactoring

## 5.108.0 (10.06.2022)

### Added

-   Add type to Issuer
-   Add remission IBAN to DealerInternalGroupIssuer
-   Add payment details for not entrusted dealers

### Changed

-   Upgraded FontAwesome to 6.0

### Fixed

-   Fix Reference Class
-   Fix Issue #174

## 5.107.0 (08.06.2022)

### Added

-   Add Mandatory documents to Nova Product
-   Add loadingScreenShow on edit quotation

### Changed

-   Translations refactoring

## 5.106.0 (07.06.2022)

### Added

-   Add EmittingQuotationDealerClickPdf
-   Add cvt variable answer on coerenza test

### Changed

-   composer update
-   Remove BookingQuotationDealerClickPdf on DealerClick email
-   General methods refactoring
-   Pend on Customer Payment Working
-   SelfEmission on Customer Payment Work

## 5.105.0 (06.06.2022)

### Added

-   Stripe Async Payment Failed Webhook

## 5.104.0 (01.06.2022)

### Changed

-   Translations refactoring
-   Quotation Effect And Expiration Update

### Fixed

-   Fix Method Name

## 5.103.0 (31.05.2022)

### Added

-   Quotation State Subtitle

### Changed

-   Translations refactoring

### Fixed

-   Fixed Nova Action Transition To Pending

## 5.102.0 (30.05.2022)

### Changed

-   Translations refactoring
-   Quotation Request Review

### Fixed

-   Fixed dealerIbarCommissionsRate on updateValuesUsingQuotationCoveragesConfirmedValues bug

## 5.101.0 (29.05.2022)

### Changed

-   Translations refactoring
-   Messages refactoring

## 5.100.0 (28.05.2022)

### Changed

-   Translations refactoring

## 5.99.0 (27.05.2022)

### Changed

-   Quotation Book Review
-   General php fixing
-   Localization refactoring
-   Dealer front-end localization refactoring

## 5.98.0 (26.05.2022)

### Changed

-   Customer Quotation Frontend WIP

## 5.97.0 (25.05.2022)

### Changed

-   Optmize Roles and Permissions Seeder

## 5.96.0 (23.05.2022)

### Added

-   Add zeroDeductibles

### Fixed

-   Fixed Covea emission bug

## 5.95.0 (20.05.2022)

### Changed

-   composer update
-   Covea policy update

## 5.94.0 (19.05.2022)

### Added

-   Add extra_pcl_commissions_base to ProductBundle

### Changed

-   Covea policy update

## 5.93.0 (18.05.2022)

### Fixed

-   Fixed stand-alone quotations on handleIssuersSimulationSnapshotsPdfJobs bug

## 5.92.0 (17.05.2022)

### Changed

-   Update EllegiCoveaZeroDeductibles
-   Nova WorkableQuotation refactoring for claims manager

### Fixed

-   Fixed seller ibar < 0 variation commissions bug

## 5.91.0 (16.05.2022)

### Added

-   Add Covea zero deductibles

### Changed

-   Update incentive costs for stand-alone products
-   Add products count details to Nova Dealercomplete

### Fixed

-   Fixed SimulationCoverage create bug

## 5.90.0 (13.05.2022)

### Changed

-   Standalone margins front end refactoring QuotationCoverage refactoring

## 5.89.0 (12.05.2022)

### Added

-   Add standalone dealerClick margins view
-   Add variable issuer emissions costs Add variable issuer claims management costs

### Changed

-   Margins refactoring

### Fixed

-   Fixed pdf mandatoryDocumentsGroup text bug

## 5.88.0 (11.05.2022)

### Added

-   Add main_email and main_mobile_phone to Nova Quotation search
-   Add PartialQuotation
-   Add claims metrics to Nova Dashboard

### Changed

-   CanceledQuotation refactoring

## 5.87.0 (10.05.2022)

### Added

-   Add Nova QuotationTransitionToRejected action

### Fixed

-   Fixed updateMarketingSetasideValue bug on negative MOL

## 5.86.0 (09.05.2022)

### Added

-   Add notesTab to Nova Seller fields

## 5.85.0 (08.05.2022)

### Added

-   Add getSystemName to ClaimState
-   Add Claim metrics
-   Add ClaimByType Nova Claim filter
-   Add getSystemName to QuotationState
-   Add ReplacedQuotation metrics

### Changed

-   Customer contacts instead of address in WorkableDoneQuotations
-   Nova Claim refactoring
-   Update WorkableQuotation metrics

## 5.84.0 (06.05.2022)

### Added

-   Add is_active to QuotationCoverage

### Fixed

-   Fixed Infodrive updarte products notifications bug

## 5.83.0 (05.05.2022)

### Added

-   Add QuotationReplacementReason
-   Add ReplacedQuotation
-   Add missing Quotation observers

### Changed

-   Nova fields traits refactoring
-   General methods refactoring

### Fixed

-   Fixed SelfEmitted public name bug

## 5.82.0 (04.05.2022)

### Changed

-   Re-publish Horizon Assets

## 5.81.0 (03.05.2022)

### Added

-   Add replacements data to Quotation

## 5.80.0 (02.05.2022)

### Added

-   Add hidden relationships to Nova WorkableDoneQuotation
-   Add authorizedToCreate false to Nova Claim

### Changed

-   QuotationPayment Resource

### Fixed

-   Fix Search Nova on QuotationPayment

## 5.79.0 (29.04.2022)

### Added

-   Add Media to QuotationPayment
-   Add Booking Quotation Customer Payment Request
-   Add Quotation payment

### Changed

-   Rename model Payment to QuotationPayment

## 5.78.0 (28.04.2022)

### Changed

-   Margin refactoring

## 5.77.0 (27.04.2022)

### Changed

-   Update Nova Quotation archive resources

### Fixed

-   Fixed vehicleFieldNotViewableForDetail()
-   Fixed quotationDocumentsTab typo bug

## 5.76.0 (26.04.2022)

### Fixed

-   Fixed handleCountingsVariableCollections bug

## 5.75.0 (22.04.2022)

### Added

-   Add Quotation hasIssuerIbarCounting
-   Add receive_counting_ibar to Issuer; Formatting; Fixed Infodrive OBD sat order
-   Added Quotation Customer Mail
-   Add new dealer attributes to Quotation
-   Add Dealer Custom View helpers
-   Add QuotationPDF Dealer Custom

## 5.74.0 (21.04.2022)

### Added

-   Added Customer Document Receiver to Dealer

## 5.73.0 (20.04.2022)

### Added

-   Added Payment States

## 5.72.0 (19.04.2022)

### Added

-   Add new Dealer Parameter
-   Added Boolean support method

## 5.71.0 (14.04.2022)

### Changed

-   Update usleep
-   createFromRequestWithInfocar refactoring
-   updateVehicleFromRequestWithInfocar refactoring

### Fixed

-   Fixed handleStandAloneCalculationEngineErrors bug

## 5.70.0 (11.04.2022)

### Added

-   Add Nova Notifications on Infodrive events
-   Add Infodrive Sat OBD API
-   Add Nova notifications to Infodrive Alarms Tested

### Changed

-   Update opening-hours for Easter

### Fixed

-   Fixed QuotationEvent::selfPurchase emitted_at bug

## 5.69.0 (10.04.2022)

### Added

-   Add CustomerPayment Notification and Mail

### Changed

-   Renaming Quotation States
-   Renaming Customer Payment States
-   Removed PymentLinkCreated webhook

## 5.68.0 (09.04.2022)

### Fixed

-   Fix getProductAttribute Method

## 5.67.0 (08.04.2022)

### Fixed

-   Fixed name bug

## 5.66.0 (07.04.2022)

### Added

-   Add an is_active attribute to Infodrive Satellite Alarm to store if your company has triggered the alarm
-   Registered two webhooks and created relative jobs to store the activation/deactivation of alarm

### Changed

-   Update EmittedQuotation dataTable data

### Fixed

-   Fixed QuotationEvent::selfPurchase emitted_at bug

## 5.65.0 (06.04.2022)

### Added

-   Add Customer Payment State to Quotation State
-   Add Transition for Customer Payment State
-   Add timestamp attribute to Quotation to manage Customer Payment transitions
-   Add current insurances to Vehicle

### Changed

-   calculateDealerClickProducts refactoring

### Fixed

-

## 5.64.0 (05.04.2022)

### Added

-   Add QuotationCoverage duration
-   Add max duration on ProductCoverage

## 5.63.0 (04.04.2022)

### Added

-   Add Stripe checkout

## 5.62.0 (01.04.2022)

### Added

-   Add ImportJsonProductCoverageCosts
-   Add ImportJsonProductCoveragePrices
-   Add map to Segnaller

### Changed

-   Update simulation_expiration_at

### Fixed

-   Fix Nova Dealer Financial supplier rates
-   Fixed selfEmitted quotation upload files bug
-   Fixed SegnallerAccounting assiclick mail bug

## 5.61.0 (30.03.2022)

### Changed

-   Set trainer user can_buy to false
-   Set trainerStandAlone user can_buy to false
-   Update InfodriveProduct durations

## 5.60.0 (25.03.2022)

### Added

-   Add 84 months option

## 5.59.0 (24.03.2022)

### Added

-   Add 72 months option;
-   Add NobisCvtSoluzioneConcessionari

### Changed

-   Changed handleVehicleAlarmTypeRateValue

## 5.58.0 (23.03.2022)

### Added

-   Add renewal_commissions to cloneData

### Fixed

-   Fixed seller commissions view bug
-   Fixed Seller hasPclCommissions bug

## 5.57.0 (20.03.2022)

### Changed

-   Traits refactoring

## 5.56.0 (19.03.2022)

### Changed

-   General models refactoring

## 5.55.0 (18.03.2022)

### Added

-   Add decimals to toPercentageString
-   Add Dealer renewal commissions
-   Add Segnaller renewal commissions
-   Add Dealer UI showTaxableCommissionsPercentage

### Changed

-   General methods refactoring;

## 5.54.0 (16.03.2022)

### Changed

-   FinancialSupplier refactoring

### Fixed

-   Fixed permissions bug

## 5.53.0 (15.03.2022)

### Added

-   Add Stripe Service

### Changed

-   Remove Mailcoach

## 5.52.0 (14.03.2022)

### Added

-   Add debugbar to require-dev

### Fixed

-   Fixed #161

## 5.51.0 (12.03.2022)

### Added

-   Add productsMandatoryDocumentsFields to Nova QuotationPanels

## 5.50.0 (11.03.2022)

### Added

-   Add renawable product

### Changed

-   Dealer and Seller commissions views refactoring

### Fixed

-   Fixed MediaStream bug

## 5.49.0 (10.03.2022)

### Added

-   Add Telegram compliancy channel
-   Add email to dealer for warnDealerClickForSignedPoliciesUploaded event
-   Add scans_received to Quotation
-   Add QuotationSessions
-   Add Canceled to QuotationsEmittedController
-   Add ScansReceived to Quotation statusMessage
-   Add Canceled to Quotation statusMessage

### Changed

-   Emitted quotation front end refactoring
-   Active instead of Emitted for quotations on dealer front end

### Fixed

-   Fixed dealer mail for customer wrong email

## 5.48.0 (09.03.2022)

### Changed

-   General methods refactoring
-   dealerclick_compliancy_email instead of dealerclick_emission_email on SendWarningDealerClickForUploadedPoliciesQuotationDealerClickMail

### Fixed

-   Fixed QuotationMediaCollections bug
-   Fixed QuotationBooleans bug

## 5.47.0 (05.03.2022)

### Added

-   Add renewal products

## 5.46.0 (04.03.2022)

### Added

-   Add Nova notifications to DealerObserver
-   Add Nova notifications to SellerObserver
-   Add update advanced dealer Dealer permission
-   Add handle basic seller permission
-   Add doneQuotationsStateIndicator to UncollectedQuotation
-   Add view any dealer internal groups check

### Changed

-   Stand-alone products view refactoring

### Fixed

-   Fixed percentageValueIssuerEmissionFeeValue round
-   Fixed Nova Admin Last login bug
-   Fixed optional seller name bug

## 5.45.0 (02.03.2022)

### Added

-   Add downloadable_policy to Product
-   Add variable PendingQuotationIssuersRequestMail
-   Add Actionable to CommercialAgentAccountBalance
-   Add CommonGoogleSheetFinalIssuer to FinalIssuerObserver

### Changed

-   Product receive_policy refactoring
-   Nova Product refactoring

## 5.44.0 (01.03.2022)

### Added

-   Add ShoppingCart products system

## 5.43.0 (25.02.2022)

### Added

-   Add HasUserDealerInternalGroup to DealerAccounting and Claim

### Fixed

-   Fixed DailyQuotationsEmittedNotifications bug
-   Fixed InfodriveOrder create bug

## 5.42.0 (24.02.2022)

### Added

-   Add collaudo documents to Infodrive response
-   Add AuthenticationLog Resource
-   Add AuthenticationLog Relationship

### Changed

-   DealerClickCalculationEngine refactoring
-   Update DailyQuotationsEmittedNotifications
-   Update EmittingQuotationTelegramNotification
-   Nova resources refactoring

### Fixed

-   Fixed Issue #162
-   Fixed Issue #163

## 5.41.0 (23.02.2022)

### Added

-   Nova CommercialAgent structure

### Changed

-   Nova structure refactoring

## 5.40.0 (23.02.2022)

### Added

-   Add notes and activity to QuotationCoverage
-   Add DealerInternalGroupByIds Nova filter

### Changed

-   PclRealValue() instead of PclValue()
-   Recipient CC based on dealer_internal_group_id

## 5.39.0 (20.02.2022)

### Added

-   Add Letizia GoogleSheetDues

### Changed

-   General methods refactoring

## 5.38.0 (18.02.2022)

### Added

-   Add dealer_internal_group_id to Dealer cloneData

### Changed

-   Update Infordrive sat order create

## 5.37.0 (17.02.2022)

### Changed

-   Infodrive warehouse refactoring

### Fixed

-   Fixed dompdf/dompdf version bug

## 5.36.0 (16.02.2022)

### Added

-   Add Satellite IMEI Select
-   Add Nova ActiviyLogTabs
-   Add activiyLogTab() to Nova resources
-   Add recipientCC to SendWarningForCustomerWrongEmail
-   Add searchable to quotationCoverage extraData
-   Add visible options to quotationCoverages extraData fields

### Changed

-   Docblock refactoring
-   Nova DealerComplete refactoring
-   Quotation coverage Extra Data Handle
-   General methods refactoring
-   Nova Seller refactoring
-   Update Infodrive API for satellite

### Fixed

-   Fixed allNewsPosts() bug
-   Fixed eminiarts/nova-tabs h1 bug in relationships
-   Fixed policy bug

## 5.35.0 (15.02.2022)

### Added

-   Add ImportInfodriveSatelliteAlarms action

### Changed

-   Nova Dealer actions refactoring

## 5.34.0 (14.02.2022)

### Added

-   Add none option to DealerInternalGroups filter
-   Add DealerInfodriveWarehouse filter

### Changed

-   Remove Ellegi menu to Viewer Base Role

### Fixed

-   Fixed month Dealer stats row card deck
-   Fixed QuotationsOverdues bug

## 5.33.0 (11.02.2022)

### Changed

-   Dealer internal group system refactoring

## 5.32.0 (11.02.2022)

### Changed

-   Nova Quotation actions refactoring

## 5.31.0 (10.02.2022)

### Changed

-   Clean BPF Manager Occurency

## 5.30.0 (09.02.2022)

### Added

-   Add changing PCL requests system
-   Add jpg and jpeg to uploadable files

### Fixed

-   Fixed InternalGroup Scope bug

## 5.29.0 (08.02.2022)

### Added

-   Add Users and Admins Logic

### Changed

-   Update Raw Database Query
-   Update Model Note

### Fixed

-   Fixed Model SentEmail bug

## 5.28.0 (07.02.2022)

### Added

-   Add accounting type to CommercialAgent
-   Added Global and Local scope to Week

### Changed

-   Updated User Scopes
-   Removed IndexQuery Related to Dealer internal group
-   Removed Dealer internal group Logic
-   Update Cached Metrics URL

## 5.27.0 (06.02.2022)

### Added

-   Add UserDealerInternalGroup Global Scope

## 5.26.0 (04.02.2022)

### Changed

-   Moved DealerClickGoogleSheetEllegi to a dedicated Google Sheet

### Fixed

-   Fixed CommercialAgentAccountBalanceCollections bug
-   Fixed QuotationCoverageObserver Product scarable bug

## 5.25.0 (02.02.2022)

### Added

-   Add exception to InfodriveOrder delete

### Changed

-   Update Customer Filter and Card
-   Updated Seller Cards

### Fixed

-   Fixed Ellegi disclosure page blank
-   Fixed GoogleSheets data update for old quotations

## 5.24.0 (01.02.2022)

### Added

-   Add refunds to Assiclick and Ellegi accounting
-   Add sellers, segnallers and commercialAgents to CommonGoogleSheet

### Changed

-   Update controlUselessPlates

## 5.23.0 (31.01.2022)

### Changed

-   Dealer internal group refactoring

## 5.22.0 (25.01.2022)

### Added

-   Added Migration for Dealer internal group User pivot table
-   Added Relationships to Dealer internal group and User
-   Add InfodriveSatelliteAlarm

## 5.21.0 (23.01.2022)

### Changed

-   Nova DealerComplete sections refactoring

## 5.20.0 (22.01.2022)

### Added

-   Add CommonGoogleSheet

## 5.19.0 (20.01.2022)

### Added

-   Add DealerClickGoogleSheetAssiclick, DealerClickGoogleSheetEllegi
-   Add PDF uppercase extension

## 5.18.0 (19.01.2022)

### Added

-   Add Self purchase Vehicle Plate Attribute Required
-   Add QuotationCoverages Extra Data UI
-   Add Try infodriveOrderDelete on cancel event

### Changed

-   Accounting Balance Order Code

## 5.17.0 (19.01.2022)

### Changed

-   Letizia instead of BPF
-   Dealer actions refactoring

### Fixed

## 5.16.0 (12.01.2022)

### Changed

-   CloneDealer action refactoring

## 5.15.0 (05.01.2022)

### Changed

-   mol_available instead of mol

## 5.14.0 (4.01.2022)

### Added

-   Add active() to products

### Changed

-   Commented loans data on clone Dealer action

## 5.13.0 (31.12.2022)

### Changed

-   Update simulation_expiration_at

## 5.12.0 (23.12.2021)

### Changed

-   SimulationCoverage refactoring
-   DealerClickGoogleSheets refactoring

### Fixed

-   Fix Datatables order for date column

## 5.11.0 (21.12.2021)

### Added

-   Add setaside incentive costs
-   Add temporary Letizia group margins on superhero views

## 5.10.0 (13.12.2021)

### Changed

-   DealerClickGoogleSheets refactoring

## 5.9.0 (10.12.2021)

### Added

-   Add server-side to BookedQuotations

### Changed

-   QuotationCoverage product_emission_fees decimal

## 5.8.0 (09.12.2021)

### Added

-   Add server-side to EmittedQuotations

### Fixed

-   Duplicate old missing coverages bug fixed

## 5.7.0 (9.12.2021)

### Changed

-   CommercialAgentAccountBalance refactoring

## 5.6.0 (02.12.2021)

### Changed

-   General methods refactoring
-   Datatable server-side refactoring
-   Top 5 sellers data refactoring

### Fixed

-   Fix Dealer stats row card deck
-   QuotationActionsCommercialAgents vatCommissions fixed

## 5.5.1 (30.11.2021)

### Fixed

-   QuotationActions bug fixing
-   QuotationRelationships bug fixing

## 5.5.0 (29.11.2021)

### Added

-   Add DailyQuotationsEmittedNotifications command

### Changed

-   General methods refactoring
-   DealerClickCalculationEngine refactoring

### Fixed

-   PendingToEmittedPartial bug fixing

## 5.4.0 (23.11.2021)

### Added

-   Add AssiclickQuotationDues, EllegiQuotationDues
-   Add DealerClickGoogleSheets

### Changed

-   General methods names refactoring
-   QuotationEvent refactoring
-   QuotationObserver refactoring
-   CommissionsHandlers refactoring
-   DealerClickCalculationEngine refactoring

## 5.3.0 (22.11.2021)

### Changed

-   Update mysql-schema.dump

## 5.2.1 (22.11.2021)

### Fixed

-   handleBookingQuotatioCustomerEngagementLettersPdf newJobs bug fixed

## 5.2.0 (17.11.2021)

### Added

-   Add server-side to LatestSimulations
-   Add server-side to QuatationsSaved
-   Add some styling for datatable processing

### Changed

-   LatestSimulations Query Optimization

### Fixed

-   Fixed QuotationCoverages Datatable Array

## 5.1.1 (16.11.2021)

### Fixed

-   Notifications JS route bug fixed

## 5.1.0 (14.11.2021)

### Added

-   Add DealerExtraService duration

### Changed

-   General methods refactoring
-   Models refactoring
-   calculateProductsEmissionFees refactoring

### Fixed

-   QuotationResource bug fixed

## 5.0.0 (13.11.2021)

### Added

-   Add Pusher notifications for Dealer front end
-   Add Pusher notifications for Admin front end
-   Add Quotation Id to Telegram NotifyIssuerOfChangesNotification
-   Add GoogleTranslate to Mailgun fail messages
-   Add permissions to receive notifications
-   Add rules to ProductBundle

### Changed

-   General QuotationEvent refactoring
-   General AccountingEvent refactoring
-   General methods refactoring
-   Models refactoring

### Fixed

-   General bug fixin

## 4.201.0 (29.10.2021)

### Added

-   Add changeSeller to QuotationActions
-   Add Dealer and Seller scopes to Vehicle and Customer
-   Add fixed_duration to InfodriveProduct
-   Add Telegram system notifications

### Changed

-   DealerWeekKpi refactoring
-   UserLatestSimulations refactoring

### Fixed

-   QuotationCoverages sorting order bug fixed
-   Fixed DealerClickPackageCalculations to handle not calculated quotations

## 4.200.0 (22.10.2021)

### Added

-   Add new products to CalculationEngine
-   Add Standard price to DealerExtraService

### Changed

-   News filter product refactoring
-   BPF Group disclosure update
-   Simulation policy refactoring
-   General methods refactoring
-   Models refactoring
-   CalculationEngine refactoring
-   ProductBundle refactoring

## 4.199.0 (15.10.2021)

### Changed

-   SimulationPolicy refactoring
-   BPF Group disclosure update

### Fixed

-   Badge text hide bug fixed

## 4.198.0 (14.10.2021)

### Added

-   Add product emission fees to QuotationCoverage

### Changed

-   Product emission fees refactoring
-   BPF Group disclosure update

### Fixed

-   QuotationStrings bug fixed
-   Float instead of Int bug fixed

## 4.197.0 (13.10.2021)

### Added

-   Add laravel-authentication-log

### Changed

-   Vehicle brand UI refactoring
-   Js and Css refactoring

### Fixed

-   CombineNovaTools brillant bug fix

## 4.196.0 (07.10.2021)

### Added

-   Add dealer KPI commands
-   Add RemoveTrailingSlash middleware

### Changed

-   Commands refactoring

## 4.195.0 (05.10.2021)

### Added

-   Add QuotationExcelDownloadForClaimsManager

### Changed

-   Remove alternative way to book a saved quotation ("Documenti da firmare")
-   General methods refactoring
-   Models refactoring
-   Infocar service down refactoring

## 4.194.0 (01.10.2021)

### Added

-   Add searchable to Dealer Nova filters

### Changed

-   Dealer commissions front end refactoring
-   DealerClick commissions front end refactoring
-   Quotation profits refactoring

## 4.193.0 (29.09.2021)

### Added

-   Add Dealer aka to navbar

## 4.192.0 (29.09.2021)

### Changed

-   Dealer disclosures front end refactoring

## 4.191.0 (27.09.2021)

### Added

-   Add Product bundles
-   Add product coverage secondary badge text

### Changed

-   Product duplication refactoring
-   Simulation errors refactoring
-   GoogleSheet QuotationResource refactoring

## 4.190.0 (20.09.2021)

### Added

-   Add Product extra data
-   Add Quotation Product global request

### Changed

-   General methods refactoring
-   Models refactoring

## 4.189.0 (16.09.2021)

### Added

-   Add models to BPF Nova Admin
-   Add hideCoveragesPrices dealer config

### Changed

-   General methods refactoring
-   Models refactoring
-   Localization refactoring

## 4.188.0 (15.09.2021)

### Added

-   Add models to BPF Nova Admin

### Changed

-   General methods refactoring
-   Models refactoring
-   Localization refactoring

## 4.187.0 (14.09.2021)

### Added

-   Add models to BPF Nova Admin + card refactoring

### Changed

-   General methods refactoring
-   Models refactoring

## 4.186.1 (13.09.2021)

### Fixed

-   General bug fixin

## 4.186.0 (13.09.2021)

### Added

-   Add Quotation to BPF Nova Admin

### Changed

-   General methods refactoring
-   Models refactoring

## 4.185.0 (11.09.2021)

### Changed

-   General methods refactoring
-   Models refactoring
-   Global UI code refactoring
-   QuotationCoverage price system refactoring

## 4.184.0 (10.09.2021)

### Added

-   Add Customer and Vehicle to BPF Nova Admin

### Changed

-   General methods refactoring
-   Models refactoring
-   DealerClickCalculationEngine methods refactoring

## 4.183.0 (09.09.2021)

### Added

-   Add only stand-alone products to DealersUser and Seller

### Changed

-   General methods refactoring
-   Model names refactoring
-   Models refactoring

## 4.182.0 (09.09.2021)

### Added

-   Add BPF Group id settings

## 4.181.0 (08.09.2021)

### Changed

-   DealerClickCalculationEngine methods refactoring

## 4.180.0 (07.09.2021)

### Changed

-   General methods refactoring
-   Model names refactoring
-   Models refactoring
-   Nova Dealer components refactoring

## 4.179.0 (07.09.2021)

### Added

-   Add self purchasable products
-   Add InfodriveOrderCreateException exception

### Changed

-   Quotation action buttons UI refactoring
-   Global UI code refactoring
-   Stand-alone UI refactoring
-   Google Analytics based on environment
-   Models refactoring

## 4.178.0 (31.08.2021)

### Added

-   Add BPF Manager Role
-   Add QuotationCalculateCommercialAgentCommissions action on WorkableQuotationDone

### Changed

-   Nova Dealer components refactoring
-   Removed EspressoAdminCompany::update() on SupplierObserver update
-   Removed softDeletes() filters on Nova resources
-   Nova resources refactoring
-   Nova metrics and lenses refactoring

## 4.177.1 (14.08.2021)

### Fixed

-   Nova Dealer tag fixed

## 4.177.0 (24.08.2021)

### Changed

-   NewsPost refactorign

## 4.176.0 (23.08.2021)

### Changed

-   Vehicle brand name cache refactoring on vehicle update

## 4.175.0 (05.08.2021)

### Changed

-   Claim system refactoring

## 4.174.0 (04.08.2021)

### Added

-   Add Claims Managements Service to Issuer
-   Add Customer Claims guide to Nova Quotation

### Changed

-   Permissions refactoring
-   General refactoring

## 4.173.0 (02.08.2021)

### Changed

-   Opening Hours refactoring

## 4.172.0 (30.07.2021)

### Added

-   Add Genderize.io
-   Add Anonimizer system

### Changed

-   Policy and Roles updated
-   Simulation replication refactoring
-   Nova Customer refactoring
-   Nova Vehicle refactoring

## 4.171.0 (26.07.2021)

### Added

-   Add is_hidden to SentEmail
-   Add AffiliatedProduct
-   Add DIP to Nova Claim

## 4.170.0 (23.07.2021)

### Added

-   Add CreatePendingQuotationFinalIssuerRequestPdf
-   Add emission data to FinalIssuer
-   Add FinalIssuer requests to Issuer request email
-   Add SendNotifyIssuerOfChangesMail WorkableQuotation Action
-   Add SendUrgeIssuerMail WorkableQuotation Action

### Changed

-   WorkableQuotationDoneByDealerLoan refactoring

## 4.169.0 (19.07.2021)

### Added

-   Add Mailcoach DealersSync console command
-   Add TrackedEvent system
-   Add SellerSimulationsCount to Nova Seller

### Changed

-   Updated Dealer relationships
-   ProductReason refactoring

## 4.168.0 (16.07.2021)

### Changed

-   Auth::user() instead of Session

## 4.167.0 (16.07.2021)

### Added

-   Add Simulation Expiration Date to settings

## 4.166.0 (15.07.2021)

### Added

-   Add Customer email validation to exclude Dealer activeEmails

### Changed

-   Infocar refactoring

## 4.165.0 (12.07.2021)

### Added

-   Add Claims Management Costs to Issuer
-   Add Claims Management Costs to Quotation

### Changed

-   Updated Ellegi claims email
-   Currency strings refactoring on blade views

### Fixed

-   PHP 8 bug fix

## 4.164.0 (09.07.2021)

### Changed

-   Customer login refactoring

## 4.163.0 (08.07.2021)

### Added

-   Add WorkableQuotationDoneByDealerLoan filter to Nova Quotation
-   Add Newsletter option to Dealer
-   Add DealerSegnallerObserver, CommercialAgentDealerObserver, DealerProductObserver
-   Add DealersWithNewsletterData Lens
-   Add SetNewsletterData action to DealersWithNewsletterData Lens

### Changed

-   Updated DealerMailcoach data
-   Updated Nova Dealer contacts card
-   Mailcoach Dealers refactoring

## 4.162.0 (07.07.2021)

### Added

-   Add Spatie Laravel Google Fonts

### Changed

-   Spatie packages PHP 8 update

### Fixed

-   AddressHelpers bug fixed

## 4.161.0 (06.07.2021)

### Added

-   Add Ellegi loans service to Dealer
-   Add DealerLoans filter to Nova Dealer
-   Add DealerEllegiLoans filter to Nova Dealer

## 4.160.0 (06.07.2021)

### Added

-   PHP 8 support

### Changed

-   Global PDF views refactoring

## 4.159.0 (02.07.2021)

### Added

-   Added Dealers and Vehicle brands relationship

### Fixed

-   Fix VehiclesBrand relationship

## 4.158.0 (01.07.2021)

### Changed

-   Changed Simulation expiration_at at 2021-09-30
-   Unread News Posts User refacotring
-   Global blade views refactoring

## 4.157.0 (24.06.2021)

### Added

-   Add Commercial agent Policy Group

### Changed

-   DealerMailcoachHelpers refactoring
-   DealerData refactoring
-   Dealer Financial suppliers Rates refactoring

## 4.156.0 (22.06.2021)

### Added

-   Add Dealer Financial supplier rates

## 4.155.0 (17.06.2021)

### Added

-   Add tooltip to navbar icons

## 4.154.0 (16.06.2021)

### Added

-   Add Dealer accounting section

## 4.153.0 (11.06.2021)

### Added

-   Add Verti CVT caclulation engine
-   Add searchable to Nova DealerProductLink

### Fixed

-   Bug fixin

## 4.152.0 (10.06.2021)

### Added

-   Add variable badge text based on product types

### Changed

-   Dealer Stats refactoring

## 4.151.0 (09.06.2021)

### Added

-   Add VehiclesBuyingTypes show error and quotation delete to UnderwritingLimitsHandlers
-   Add RejectedDurations show error and quotation delete to UnderwritingLimitsHandlers
-   Add variable badge text based on durations

### Changed

-   Handle hidden fields for model mutators on Nova

## 4.150.0 (28.05.2021)

### Added

-   Dealer Stats

## 4.149.0 (28.05.2021)

### Fixed

-   PDF bug on deleted products

## 4.148.0 (28.05.2021)

### Changed

-   Customer Auth refactoring

## 4.147.0 (21.05.2021)

### Changed

-   Dealer refactoring

## 4.146.0 (18.05.2021)

### Added

-   Add SegnallerClosedQuotation
-   Add SendSegnallerAccountBalanceSegnallerMail
-   Add DealerSubSegnaller
-   Add SubSegnallerCommissionsHandler

## 4.145.0 (13.05.2021)

### Added

-   Add logo to Issuer
-   Add getYears() to Time helper
-   Add snakeSpaces() to String helper

### Fixed

-   QuotationsToEmit seller name bug fix

## 4.144.0 (10.05.2021)

### Added

-   Add SendDealerWeeklyAccountingClosingsDocumentsDealerMail cc mail to amministrazione@dealerclick.it

### Fixed

-   DIP and coverageDescription for old versions front end fixed

## 4.143.0 (08.05.2021)

### Changed

-   Multiserver services refactoring

## 4.142.0 (05.05.2021)

### Added

-   Add vehiclesPhotos
-   Add https://assiclick.com/dealerclick to login navbar

### Changed

-   Updated controlUselessPlates

## 4.141.0 (23.04.2021)

### Added

-   Add toCurrencyString, toPercentageString helpers
-   Add fixed_commissions to dealer_segnaller
-   Add index is_active boolean to DealerComplete

### Changed

-   DealerSegnallerFields refactoring
-   DealerSegnaller refactoring

## 4.140.0 (22.04.2021)

### Added

-   Add issuer disclosures to BookingQuotationCustomerDipsMail
-   Add SendCustomerDipsMail Quotation Action
-   Add ChangeCustomerEmailWithDealerEmail Customer Action
-   Add ChangeCustomerEmail Customer Action
-   Add Nova SegnallerAccounting, Nova SegnallerAccountingEllegi

### Changed

-   BookingQuotationCustomerDipsMail refactoring

## 4.139.0 (21.04.2021)

### Fixed

-   Fixed dealer_internal_group_id foreign key on dealers table

## 4.138.0 (20.04.2021)

### Added

-   Add DuplicateSeller Seller Action
-   Add CopyDealerOfficesToDealers Dealer Action
-   Add default now() date on activated_at forms

### Changed

-   Credentiable refactoring
-   SellersUser create default data refactoring

## 4.137.0 (16.04.2021)

### Added

-   Add Issuer to Segnaller
-   Add filters to DealerAccountingEllegi
-   Add dealer_aka to DealerAccounting
-   Add final_issuer_aka to EllegiFinalIssuerAccounting
-   Add SegnallerAccounting
-   Add Nova SegnallerAccounting
-   Add SegnallerAccounting Policy

### Changed

-   nova-sortable instead of nova-order-field

## 4.136.0 (16.04.2021)

### Changed

-   General Nova refactoring
-   General packages update

## 4.135.0 (08.04.2021)

### Added

-   Add SendDealerWeeklyAccountingClosingsDocumentsDealerMail cc mail to segnaller

## 4.134.0 (31.03.2021)

### Changed

-   Updated Ellegi Engagement letter
-   Updated Ellegi documents
-   Backup system refactoring

### Fixed

-   Up coverage accounting bug fix

## 4.133.0 (17.03.2021)

### Added

-   Add ActiveStatus filter to Nova SellersWithCommissionsData Lens
-   Add AttachMany Dealer to Nova NewsPost

## 4.132.0 (16.03.2021)

### Added

-   Add Tag to Nova Dealer
-   Add aka to Segnaller

### Changed

-   Nova Segnaller and Nova DealerComplete relation refactoring

## 4.131.0 (15.03.2021)

### Added

-   Add Nova QuotationsToEmit Lens on WorkableQuotation
-   Add Tag to Nova DealerComplete
-   Add product version name to issuer request

### Changed

-   Increased .popover.coverage-detail width to 700px

## 4.130.0 (12.03.2021)

### Added

-   Add Mailcoach

### Fixed

-   Change decimal attribute to accountoing tables
-   IBAR Markup value on simulation_prices

## 4.129.0 (6.03.2021)

### Added

-   Add DealerData
-   Add Nova DealerData
-   Add DealerData Policy
-   Dealer scraping data system
-   Add statusMessageAutoHide for FileIsTooBig exception

## 4.128.0 (3.03.2021)

### Changed

-   ProductCalculationEngine refactoring

### Fixed

-   Fixed view bug for deleted products

## 4.127.0 (2.03.2021)

### Added

-   Add issuer contact request system

### Fixed

-   Fixed view bug for deleted products

## 4.126.0 (27.02.2021)

### Added

-   Add Rate
-   Add Nova Rate
-   Add ProductsWithSignaturesData Lens
-   Add SetProductSignatures Action
-   Add accepted_coverages to ProductCoverage
-   Add rejected_coverages to ProductCoverage
-   Add rejected_missing_coverages to ProductCoverage
-   Add handleAcceptedCoverages in applyUnderwritingLimits to DealerClickCalculationEngine
-   Add handleRejectedCoverages in applyUnderwritingLimits to DealerClickCalculationEngine
-   Add handleRejectedMissingCoverages in applyUnderwritingLimits to DealerClickCalculationEngine
-   Add issuer_id to ClaimsGuide
-   Add TuaDealerMultimarcaCristalli CalculationEngine
-   Add TuaDealerMultimarcaEventi CalculationEngine
-   Add TuaSilverEventi CalculationEngine

### Changed

-   Various Nova actions refactoring
-   productCoverageBadgeText refactoring
-   Better search and view data in Nova DealerProductCommission, Nova DealerProductLink, Nova DealerProductMarkup, Nova DealerProductOrderingRule

## 4.125.1 (22.02.2021)

### Fixed

-   Fixed financial_supplier_rates cascade onDelete on Dealers
-   Minor bug fixing

## 4.125.0 (15.02.2021)

### Added

-   Add GlassHandlers to DealerClickCalculationEngine

### Changed

-   Infodrive refactoring
-   SimulationCoverages refactoring

## 4.124.0 (12.02.2021)

### Changed

-   Change delivery message type on sent emails table

## 4.123.0 (11.02.2021)

### Added

-   Add InfodriveProduct
-   Add Infodrive products to Product
-   Add SystemEmissionProduct, Nova SystemEmissionProduct
-   Add Infodrive API

### Changed

-   Nova QuotationCoverage actions refactoring

## 4.122.0 (10.02.2021)

### Added

-   Add accepted_durations, min_vehicle_purchase_value, max_vehicle_purchase_value, max_vehicle_purchase_value_without_satellite, vehicle_fuel_types_rejected to ProductCoverage
-   Add CustomerRelationshipBooleans
-   Add DealerClickCalculationEngineException
-   Add errors to Simulation
-   Add ErrorsHandlers to DealerClickCalculationEngine
-   Add Issuer original documents to Nova UncorrectQuotation, Nova UncheckedQuotation
-   Add Original Policies to Nova UncorrectQuotation
-   Add personalized recommendation to Ellegi disclosure
-   Add ProductCoverageWithLimitsData lens to Nova ProductCoverage
-   Add QuotationSnapshot
-   Add QuotationSnapshotHandlers to DealerClickCalculationEngine
-   Add Rejected vehicles brands to ProductCoverage
-   Add simulationsDocuments disk
-   Add snapshot_send to Issuer

### Changed

-   DealerClickCalculationEngine CardHandlers refactoring
-   DealerClickCalculationEngine GeographicalLimitsHandlers refactoring
-   DealerClickCalculationEngine RulesHandlers order change
-   DealerClickCalculationEngine UnderwritingLimitsHandlers refactoring
-   Nova ProductCoverage actions refactoring
-   Nova ProductCoverage refactoring
-   Passing all regions to AssiclickAdminCompanyProducts create and update
-   Update FinancialSupplierRate ordering
-   retrieveVehicleFuelType refactoring

### Fixed

-   Namespace fixed on TrialUpgradeRequest Actions

## 4.121.0 (3.02.2021)

### Added

-   Add commercial_costs to Quotation
-   Add commissions_type to ProductCoverage
-   Add DealerClickCalculationEngine CardHandlers
-   Add emission_fees to Issuer
-   Add is_card_unique to SimulationCoverage
-   Add is_contact_request to Product
-   Add is_price_from to ProductCoverage
-   Add issuer_contact_request to AssiclickCalculations
-   Add issuer_contact_request to DealerClickCalculations
-   Add issuers_emission_fees to Quotation
-   Add products_emission_fees to Quotation
-   Add segnallers_commissions to Quotation
-   Add DealerClick commissions view on SuperHero front end

### Changed

-   Apply normal ordering to quotations made by SuperHero
-   Changed Product aka definition
-   DealerClickCalculationEngine CommissionsHandlers refactoring
-   DealerClickCalculationEngine CostsHandlers refactoring
-   DealerClickCalculationEngine MarkupsHandlers refactoring
-   DealerClickCalculationEngine RulesHandlers refactoring
-   Nova DealerProductMarkup refactoring
-   Nova Product refactoring
-   Nova ProductCoverage refactoring

## 4.120.0 (29.01.2021)

### Added

-   Add up coverage

## 4.119.0 (28.01.2021)

### Added

-   Add contact_required to Dealer
-   Add Dealer config
-   Add DealerInternalGroup
-   Add DealerInternalGroups filter to Nova Dealer, Nova DealerComplete
-   Add DealersWithTrialVersion Lens
-   Add DealerTrial filter to Nova Dealer, Nova DealerComplete
-   Add dedicated phone number for SMS services
-   Add is_trial to Dealer
-   Add Nova DealerInternalGroup
-   Add Nova TrialUpgradeRequest
-   Add ProductCoverage under logo text
-   Add send DealerUser Sellers credentials email
-   Add TrialUpgradeRequest

### Changed

-   eminiarts/nova-tabs refers to dev-master (1.2.2) on Assiclick/nova-tabs
-   Increased .popover.coverage-detail width to 500px
-   SuperHeroController config instead of env
-   Update .env.example
-   Update TrustProxies

### Fixed

-   Fixed dealerclick.pdf extra PCL commissions
-   Fixed QuotationAssignDeltaPriceToIbar Action

## 4.118.0 (22.01.2021)

### Added

-   Add ProductCoverage max_vehicle_age_start
-   Add MaxVehicleAgeStartLimit to UnderwritingLimitsHandlers

### Changed

-   Changed ProductCoverage max_vehicle_age_months to max_vehicle_age_end

## 4.117.0 (21.01.2021)

### Added

-   Add assiclick/espresso-api-laravel-client
-   Add dotenv-webpack

### Changed

-   Removed API variables from pages

### Fixed

-

## 4.116.0 (18.01.2021)

### Added

-   Add template text for ProductCoverage badge_text attribute

### Fixed

-   Nova Dealer add FinancialSupplier hidden relationship fixed

## 4.115.0 (15.01.2021)

### Added

-   Add DealerGroup
-   Add DealerGroups filter to Nova Dealer, Nova DealerComplete
-   Add map to Nova DealerComplete
-   Add Nova DealerGroup
-   Add tooltips to DealerCardInfo Card

### Changed

-   New Seller refactoring
-   Removed grandTotalCommissionsPercentage to simulation commissions view

## 4.114.0 (14.01.2021)

### Added

-   Add DealerOffices Card to Nova Dealer
-   Add DealerOffices Map to Nova Dealer
-   Add Dealers Map Nova Dashboard
-   Add map to Nova Seller

### Changed

-   Removed address data from Seller
-   Seller office instead of main address

## 4.113.0 (13.01.2021)

### Added

-   Add DealerOffice
-   Add Nova DealerOffice

### Changed

-   Dealer office headquarter instead of main address
-   Dealer Users welcome emails refactoring
-   encodeURIComponent to DealerCardInfo Nova Card URL
-   Seller Users welcome emails refactoring
-   Removed address data from Dealer

### Fixed

-   nova-attach-many temporary patch
-   Wrong namespace fixed

## 4.112.0 (11.01.2021)

### Added

-   Add Mailgun Tags to messages
-   Add SentEmail tracking for accounting weeks emails
-   Add SentEmail tracking for customer emails
-   Add wrong email notice on Nova Customer title

### Changed

-   Changed SentEmail to Polymorphic Relationship
-   GoogleSheetAccounting updateWeeks refactoring
-   Nova SentEmail refactoring

## 4.111.0 (08.01.2021)

### Changed

-   25 resources on Claim index
-   Back to normal opening hours
-   DealersWithCommissionsData lens actions refactoring
-   Removed snow effect on login page
-   Removed useless console.log on simulation_prices.js
-   SellersWithCommissionsData lens actions refactoring
-   SellersWithCommissionsData lens refactoring
-   Show IBAR value for Fixed minimum value on Nova Dealer
-   Image max size to 640 on Nova Wallpaper

### Fixed

-   Fixed BookedOverdue to Booked transition Simulation expiration_at
-   Fixed view bug on IBAR value for Fixed minimum value on dealer front end

## 4.110.0 (07.01.2021)

### Added

-   Add Nova Claim filters
-   Add Nova Claim details

### Changed

-   Accept images as Claim documents

### Fixed

-   LinkApiCredentialToClient bug fix

## 4.109.0 (04.01.2020)

### Added

-   Add Claims
-   Add Nova Claims

## 4.108.0 (04.01.2021)

### Added

-   Add Infocar down simulation flux

### Changed

-   Dealer home page warning message refactoring

## 4.107.0 (04.01.2021)

### Added

-   Add dealer home page warning message

## 4.106.0 (30.12.2020)

### Added

-   Add CreateClaimsGuideCustomerPdf
-   Add sending claims guide to dealer action
-   Add claims guide document to emitted quotations front end

### Changed

-   Changed Simulation expiration_at at 2021-06-30

## 4.105.0 (27.12.2020)

### Added

-   Add Buying type to Nova Vehicle, Nova Quotation
-   Add ProductVehicleBuyingTypeExcludeRule to DealerClickCalculationEngine

## 4.104.0 (26.12.2020)

### Added

-   Add main_email_is_wrong to Customer

## 4.103.0 (22.12.2020)

### Added

-   Add Christmas opening hours
-   Add ClaimsGuide
-   Add is_emissions_office to DealerUser
-   Add Nova ClaimsGuide
-   Add SendWarningToDealerForCustomerWrongEmail action
-   Add SentEmail Policy, ClaimsGuidePolicy Policy

### Changed

-   Renamed SendEmittingQuotationCustomerDipsMail to SendBookingQuotationCustomerDipsMail

## 4.102.0 (21.12.2020)

### Changed

-   Supplier aka internal instead of supplier aka in Nova QuotationCoverage

## 4.101.0 (21.12.2020)

### Added

-   Add SendEmittingQuotationCustomerDipsMail

## 4.100.0 (21.12.2020)

### Added

-   Add snow effect on login page

## 4.99.0 (19.12.2020)

### Changed

-   Nova actions refactoring
-   Nova filters refactoring
-   Nova metrics refactoring

## 4.98.0 (18.12.2020)

### Added

-   Add Stand-alone string on Nova Dealer product card

## 4.97.0 (18.12.2020)

### Changed

-   Nova Dealer refactoring
-   Nova Dealer metrics refactoring

## 4.96.0 (11.12.2020)

### Added

-   Add AdministrativeEmployees, AdministrativeTasks, CountedAtPeriod filters to Nova QuotationTask
-   Add Dealers filter to Nova DealerExtraService
-   Add OauthClient Policy, QuotationTaskPolicy Policy
-   Add Nova CanceledQuotation

### Changed

-   Nova menu refactoring

## 4.95.1 (07.12.2020)

### Fixed

-   AdministrativeTask Week, Ten, Fortnight, Month bug fixed

## 4.95.0 (04.12.2020)

### Added

-   Add FinancialSupplier, FinancialSupplierRates
-   Add Nova FinancialSupplier, Nova FinancialSupplierRates
-   Add FinancialSupplier Policy, FinancialSupplierRates Policy

### Changed

-   Dealer loans data

## 4.94.1 (01.12.2020)

### Fixed

-   SimulationJavaScriptHelpers seller bug fix
-   Form input hidden loan value fixed
-   Dealer route single action fixed

## 4.94.0 (01.12.2020)

### Added

-   Add Loans
-   Add IBAR variation Commissions to Dealer
-   Add scar_type to Dealer

### Changed

-   Ide helper model updated
-   Queues refactoring

## 4.93.1 (23.11.2020)

### Fixed

-   DugId bug fixed

## 4.93.0 (18.11.2020)

### Added

-   Add QuotationTransitionToCanceled action to WorkableQuotationDone

## 4.92.0 (10.11.2020)

### Added

-   Add AttachMany to Nova ProductCoverage

### Changed

-   GeographicalLimitsHandlers on DealerClickCalculationEngine

## 4.91.0 (08.11.2020)

### Added

-   Add Google Analytics and Iubenda

### Fixed

-   serviceCardGlass bug fix

## 4.90.0 (20.10.2020)

### Added

-   Add DealerSimulationsCount Nova Dealer card

## 4.89.0 (19.10.2020)

### Changed

-   Updated QuotationDocumentsToEmitted Card
-   Updated ArchivingQuotationChecks Card

### Fixed

-   Fixed ArchivingQuotations customer_signature_mandatory and dealer_signature_mandatory
-   Fixed SendSignedPoliciesToIssuerMail and SendSignedPoliciesToFinalIssuerMail bug

## 4.88.0 (15.10.2020)

### Added

-   Add Notes to Nova Product

### Changed

-   Using modified nova-resource-notes

## 4.87.0 (14.10.2020)

### Added

-   Add Maximum Vehicle Insurable Age Months to Nova ProductCoverage index

### Changed

-   General JS refactoring

### Fixed

-   Fixed bug on city not selected from options

## 4.86.0 (12.10.2020)

### Added

-   Add CvtGlass coverage on QuotationResource and QuotationResourceByProduct

### Changed

-   General refactoring to improve performances

### Fixed

-   Merge Dealer mandatory coverages on duplicateSimulation

## 4.85.0 (10.10.2020)

### Added

-   Add Calculation engine Geo Limits ordering rule

### Changed

-   General refactoring
-   General Nova refactoring

## 4.84.0 (09.10.2020)

### Added

-   Add cached methods to handle Nova Dealer performances
-   Add NovaStaticsMiddleware to improve Nova performances
-   Add Active Sellers metric to Dealer

### Changed

-   General refactoring

## 4.83.0 (08.10.2020)

### Added

-   Add serviceWildAnimals to QuotationResource, QuotationResourceByProduct
-   Add Motor1 news feed

### Changed

-   Dealer refactoring
-   Nova Dealer index actions refactoring
-   Removed unused Nova components

### Fixed

-   Add RequestedToRequested transition

## 4.82.0 (07.10.2020)

### Added

-   Add RequestedOverdueToRevoked transition

### Changed

-   Rollback Nova Dealer refactoring until Nova fix 3.12.0 bug

## 4.81.0 (06.10.2020)

### Changed

-   Nova Dealer refactoring

## 4.80.0 (05.10.2020)

### Added

-   Add Accepted Durations to Dealer
-   Add metrics to Top Dealers
-   Add ExcelDownload to Top Dealers, Top Dealers by Month, Top sellers, Top sellers by month
-   Add filters to DealerProductLink, DealerProductMarkup, DealerProductOrderingRule

### Changed

-   Main Nova dashboard card updated
-   Nova metrics refactoring
-   Nova ProductCoverage, Nova ProductVersion, Nova ProductVersionDescription refactoring

## 4.79.0 (03.10.2020)

### Added

-   Add Top Dealers, Top sellers
-   Add Top Dealers By Month, Top sellers by month
-   Add DealerWorkableDoneQuotationAveragePcl metric to Dealer
-   Add metrics to Seller
-   Add metrics to Dealers
-   Add metrics to Dealer

### Changed

-   General Nova refactoring

## 4.78.0 (02.10.2020)

### Added

-   Add RequestedOverdueToRevoked transition
-   Add ActiveStatus Nova filter to Dealer, DealersUser, Product, ProductVersion, Segnaller, Seller, SellerUser, SubSegnaller, Supplier

### Changed

-   Dealers Filter instead of duplicated ones
-   Issuers Filter instead of duplicated ones
-   Products Filter instead of duplicated ones
-   Sellers Filter instead of duplicated ones
-   General Nova refactoring

## 4.77.0 (02.10.2020)

### Changed

-   General Nova refactoring

## 4.76.0 (01.10.2020)

### Added

-   Add QuotationRevoke action to WorkableQuotation

## 4.75.0 (30.09.2020)

### Changed

-   General refactoring

## 4.74.0 (29.09.2020)

### Added

-   Add alternative way to book a saved quotation ("Documenti da firmare")

### Changed

-   Dealer navbar UI responsive refactoring
-   Quotations saved UI responsive refactoring
-   Quotations booked UI responsive refactoring
-   Quotations emitted UI responsive refactoring
-   Removed warning message for 12 months duration
-   Auto save quotation after printing
-   Auto save quotation after sending customer email
-   Redirect to saved quotation after quotation saving
-   Changed process balancing system for default, email and pdf workers

## 4.73.0 (28.09.2020)

### Added

-   Add expiration_at to Simulation
-   Add temporary transitions to Simulation and Quotation to handle SavedOverdueSimulation
-   Add Closed Simulation message on show page

### Changed

-   Changed checkIfQuotationIsOverdue method on QuotationsController to handle expired Simulations
-   Changed checkIfSimulationIsOverdue method on SimulationsController to handle just Opened Simulations
-   Changed effect_at to expiration_at in SavedToOverdueSimulations maintenance command
-   Changed effect_at to expiration_at in views
-   Dealer navbar Proposte changed to Proposte salvate
-   General refactoring
-   Updated controlUselessPlates

## 4.72.0 (26.09.2020)

### Added

-   Add CopyDealerIbar, SetDealerIbar actions to DealersWithIbarData Nova Lens
-   Add CopyDealerCommissions, SetDealerCommissions actions to DealersWithCommissionsData Nova Lens
-   Add CopyDealerRui, SetDealerRuiEllegiRegistration actions to DealersWithRuiData Nova Lens
-   Add ellegi_registration to Dealer
-   Add ellegi_registration to Seller

## 4.71.0 (26.09.2020)

### Added

-   Add mobile phone to User
-   Add mobile phone to Nova User
-   Add LoginHelpRequestNotification, MailgunTemporaryFailAdminNotification, MailgunPermanentFailAdminNotification

### Changed

-   Moved to nexmo-notification-channel

## 4.70.0 (25.09.2020)

### Added
- Add Mailgun webhooks: introduced webhooks for Mailgun.
- Add SentEmail: introduced the SentEmail feature.
- Add Sent emails to Quotation, WorkableQuotation, WorkableQuotationDone: integrated sent emails into Quotation, WorkableQuotation, and WorkableQuotationDone models.

## 4.69.0 (24.09.2020)

### Added
- Add Laravel Webhook Client: introduced the Laravel Webhook Client.
- Add handlePendingUser to PendingActions: added functionality to handle pending users in PendingActions.

## 4.68.0 (23.09.2020)

### Added
- Add WorkableQuotationDoneObserver: introduced an observer for WorkableQuotationDone.

## 4.67.1 (22.09.2020)

### Changed
- Policy typo bug fix: corrected a typo in the policy files.

## 4.67.0 (22.09.2020)

### Added
- Add AttachMany to Nova Dealer, Nova Product, Nova SimulationCoverage: introduced the AttachMany feature to various Nova models.
- Add QuotationTask: introduced the QuotationTask feature.
- Add months() helper: added a helper function for months.

### Changed
- QuotationObservers refactoring: improved the structure and functionality of QuotationObservers.

## 4.66.0 (21.09.2020)

### Added
- Add AdministrativeTask, AdministrativeEmployeeAccounting: introduced AdministrativeTask and AdministrativeEmployeeAccounting features.
- Add Nova AdministrativeTask, Nova AdministrativeEmployeeAccounting: integrated corresponding Nova models for AdministrativeTask and AdministrativeEmployeeAccounting.
- Add Admin Policy, AdministrativeEmployee Policy, AdministrativeEmployeeAccounting Policy, AdministrativeTask Policy, Segnaller Policy, SubSegnaller Policy: introduced policies for new administrative and segnaller features.
- Add AdministrativeTask relationship to Administrative employee: established a relationship between AdministrativeTask and Administrative employees.
- Add documents to User / Administrative employee: introduced document handling for users and administrative employees.
- Add quotation_user relationship: established a relationship between quotations and users.
- Add pending User to Quotation: introduced a pending user feature for quotations.

### Changed
- Policies refactoring: improved the structure and organization of policies.
- General refactoring: overall improvements to the codebase.

## 4.65.0 (18.09.2020)

### Added
- Add Admin, Administrative employee: introduced Admin and Administrative employee roles.
- Add Nova Admin, Nova Administrative employee: integrated corresponding Nova models for Admin and Administrative employee.
- Add is_administrative_employee to User: introduced a field to identify administrative employees in the User model.

## 4.64.0 (18.09.2020)

### Added
- Add emitted_user_id to QuotationLogFields: introduced an emitted_user_id field to QuotationLogFields.
- Add Edit received policies documents Permission: introduced permission to edit received policies documents.
- Add scannedDocumentsFields to archiving Quotations: added fields for scanned documents in archiving Quotations.

### Changed
- BooleanGroup instead of Checkboxes on archiving Quotations: switched from checkboxes to BooleanGroup on archiving Quotations.
- General refactoring: overall improvements to the codebase.

### Fixed
- Fixed bug on SetQuotationSomeCustomerSignaturesAbsence, SetQuotationSomeDealerSignaturesAbsence, SetQuotationSomeDocumentAbsence: resolved bugs in SetQuotationSomeCustomerSignaturesAbsence, SetQuotationSomeDealerSignaturesAbsence, and SetQuotationSomeDocumentAbsence.

## 4.63.0 (17.09.2020)

### Added
- Add Unsplash wallpapers to login page: introduced Unsplash wallpapers on the login page.
- Add Nova Wallpaper resource: integrated a Wallpaper resource for Nova.
- Add serviceZeroDeductibles to QuotationResource: introduced a serviceZeroDeductibles feature to QuotationResource.
- Add serviceZeroDeductibles to QuotationResourceByProduct: introduced a serviceZeroDeductibles feature to QuotationResourceByProduct.
- Add SendQuotationContractDealerMail and SendQuotationCountingDealerMail to CompliantPartial and Compliant Nova Quotation: added mail sending features to CompliantPartial and Compliant Nova Quotation.

### Changed
- Removed laravel-dashboard: eliminated laravel-dashboard.
- Updated nova-breadcrumbs: updated the nova-breadcrumbs package.

### Fixed
- Total price zero bug partial fix: resolved an issue with total price zero.

## 4.62.0 (16.09.2020)

### Added
- Add miniKaskos to simulation page: introduced miniKaskos to the simulation page.
- Add controlMaxVehicleAgeMonthsLimit for fixed duration coverages: added a control for max vehicle age months limit on fixed duration coverages.

### Fixed
- Fixed OrderingHandlers bug: resolved a bug in OrderingHandlers.

## 4.61.0 (15.09.2020)

### Changed
- General refactoring: overall improvements to the codebase.
- No page break after ellegi.collaborazioni in Ellegi allegato_4: removed page break after ellegi.collaborazioni in Ellegi allegato_4.
- Removed 12 months warning message: eliminated the 12 months warning message.

## 4.60.0 (15.09.2020)

### Added
- Add WorkableQuotationAveragePcl, WorkableQuotationCount, WorkableQuotationPerDealer, WorkableQuotationPerMonth, WorkableQuotationPerState to Nova WorkableQuotation: introduced various metrics to Nova WorkableQuotation.
- Add help to min and max values on DealerProductOrderingRule: added help text for min and max values on DealerProductOrderingRule.

### Fixed
- Fixed OrderingHandlers bug: resolved a bug in OrderingHandlers.

## 4.59.0 (14.09.2020)

### Added
- Add static helpers to Simulation: introduced static helpers for Simulation.
- Add helpers to Simulation, QuotationCoverage, DealerProductCommission: added helper functions to Simulation, QuotationCoverage, and DealerProductCommission.
- Add CollectionServiceProvider: introduced a CollectionServiceProvider.

### Changed
- DealerClickCalculationEngine refactoring: improved the structure and functionality of the DealerClickCalculationEngine.
- Update ide-helper files: updated ide-helper files.

## 4.58.0 (11.09.2020)

### Added
- Added vehicles brand logo to simulations and quotations indexes: introduced brand logos for vehicles in simulations and quotations indexes.

### Changed
- Changed vehicles brands logos system: updated the system for managing vehicle brand logos.
- Changed dealer available vehicles brands ordering: revised the ordering of available vehicle brands for dealers.

## 4.57.3 (10.09.2020)

### Fixed
- Fixed QuotationStatusMessageByState on home page bug: resolved an issue with QuotationStatusMessageByState on the home page.

## 4.57.2 (10.09.2020)

### Fixed
- Fixed checkIfSimulationIsOverdue bug for Revoked simulations: resolved a bug in checkIfSimulationIsOverdue for revoked simulations.
- Fixed WorkableQuotationByEmittedAtPeriod bug for empty end date: resolved a bug in WorkableQuotationByEmittedAtPeriod for empty end dates.

## 4.57.1 (10.09.2020)

### Fixed
- Fixed beautify bug: resolved a bug with beautify.

## 4.57.0 (10.09.2020)

### Added
- Add laravel-ide-helper: introduced laravel-ide-helper.

### Changed
- Code cleaning: cleaned up the codebase.
- Removed useless use PDF: eliminated unnecessary use PDF statements.
- Prettier JS and SCSS: applied prettier formatting to JS and SCSS files.
- Language refactoring: improved the structure and readability of language files.

### Fixed
- Fixed ibar confirmed 0 value for stand-alone confirmed quotations: resolved an issue with ibar confirmed 0 value for stand-alone confirmed quotations.

## 4.56.0 (04.09.2020)

### Added
- Add Minimum PCL and Accepted Coverages to Segnallers: introduced Minimum PCL and Accepted Coverages for Segnallers.
- Add Fuel card to Dealer: introduced a fuel card feature for dealers.
- Add option to change archiving admins to ArchivedQuotation: introduced an option to change archiving admins for ArchivedQuotation.
- Add Emitted User to Quotations: introduced an Emitted User field for Quotations.
- Add Activity log to WorkableQuotationDone, ArchivedQuotation, UnarchivedQuotation, UncheckedQuotation, UncollectedQuotation, UncorrectQuotation, UnscannedQuotation: introduced an activity log for various Quotation statuses.
- Add TrashAloneSimulations maintenance command: introduced a maintenance command for TrashAloneSimulations.
- Add scheduled monthly TrashAloneSimulations maintenance command: introduced a scheduled monthly maintenance command for TrashAloneSimulations.
- Add fields to Nova Quotation: introduced new fields for Nova Quotation.

### Changed
- Changed emitted quotations colors: updated the color scheme for emitted quotations.

### Fixed
- Fixed endOfDay bug on DateRangeFilter: resolved an end-of-day bug in DateRangeFilter.

## 4.55.0 (01.09.2020)

### Added
- Add handleSegnallers to QuotationTransitionToEmitted and QuotationTransitionToEmittedPartial Actions: introduced handleSegnallers feature for Quotation transitions to Emitted and EmittedPartial.

### Changed
- QuotationResource update: revised the QuotationResource.
- GoogleSheetAccounting refactoring: improved the structure and functionality of GoogleSheetAccounting.
- PendingToEmitted and PendingToEmittedPartial refactoring: updated the PendingToEmitted and PendingToEmittedPartial transitions.

## 4.54.0 (31.08.2020)

### Changed
- General refactoring: overall improvements to the codebase.

## 4.53.0 (28.08.2020)

### Changed
- Update Ellegi collaborations: revised the Ellegi collaborations.

## 4.52.0 (25.08.2020)

### Changed
- medialibrary v8.0 update: updated the medialibrary package to version 8.0.

## 4.51.0 (24.08.2020)

### Added
- Add handleDealerClickUserLogin: introduced a feature to handle DealerClick user login.

## 4.50.0 (20.08.2020)

### Changed
- User attributes to handle Dealer Users and Seller Users: updated user attributes to better handle Dealer Users and Seller Users.

## 4.49.0 (19.08.2020)

### Changed
- Speeded animations on home: increased the speed of animations on the home page.
- Removed animations on simulations: eliminated animations on simulations.
- Speeded animations on quotation: increased the speed of animations on quotations.
- Nova Dealer metrics refactoring: improved the structure and functionality of Nova Dealer metrics.

## 4.48.0 (17.08.2020)

### Changed
- General refactoring: overall improvements to the codebase.

## 4.47.0 (13.08.2020)

### Changed
- General refactoring: overall improvements to the codebase.

## 4.46.0 (13.08.2020)

### Changed
- DealerClickCalculationEngine refactoring: improved the structure and functionality of the DealerClickCalculationEngine.
- Nova Product index refactoring: improved the structure and functionality of the Nova Product index.

## 4.45.0 (12.08.2020)

### Added
- Add Traveled Kms to Vehicle: introduced a field for traveled kilometers in the Vehicle model.
- Add SuperHero user: introduced a SuperHero user role.

### Changed
- Dealer scar_value to decimal: updated Dealer scar_value to use decimal format.
- Simulation scar_percentage and target_commissions_variation to decimal: updated Simulation scar_percentage and target_commissions_variation to use decimal format.

## 4.44.0 (04.08.2020)

### Added
- Add City Relationship to Customers: introduced a relationship between City and Customers.
- Add Geographical limits to DealerClickCalculationEngine: introduced geographical limits to the DealerClickCalculationEngine.

### Changed
- General images optimization: improved the optimization of images.

## 4.43.0 (03.08.2020)

### Changed
- Remove Assiclick from Nova Dealer: eliminated Assiclick from the Nova Dealer model.
- Nova Dealer sections refactoring: improved the structure and functionality of Nova Dealer sections.

## 4.42.0 (31.07.2020)

### Added
- Add scanned contracts dealer upload system: introduced a system for dealers to upload scanned contracts.
- Add scanned contracts received by dealer section on Nova Quotation: added a section for scanned contracts received by dealers in Nova Quotation.
- Add QuotationChangePclToServiceCard action: introduced the QuotationChangePclToServiceCard action.

### Changed
- Quotation relationship refactoring: improved the structure and functionality of quotation relationships.
- Booked and Emitted quotations front end refactoring: improved the front-end for booked and emitted quotations.
- Emitted and EmittedPartial dealer email refactoring: improved the email system for emitted and emitted partial dealer emails.

## 4.41.0 (28.07.2020)

### Added
- Add Segnaller, SubSegnaller: introduced Segnaller and SubSegnaller roles.
- Add Nova Segnaller, Nova SubSegnaller: integrated corresponding Nova models for Segnaller and SubSegnaller.
- Add documents to Dealer and Seller: introduced document handling for dealers and sellers.
- Add Vehicle useless plate number inserted control: introduced a control for useless plate numbers in vehicles.
- Add Opening Hours: introduced a feature for opening hours.

## 4.40.0 (23.07.2020)

### Added
- Add help text in dealer booking email: introduced help text in dealer booking emails.
- Add SendSignedPoliciesToIssuersMail job: introduced a job to send signed policies to issuers.
- Add SendQuotationSignedDocumentsToIssuer action: introduced an action to send signed quotation documents to issuers.
- Add SendSignedPoliciesToFinalIssuersMail job: introduced a job to send signed policies to final issuers.
- Add SendQuotationSignedDocumentsToFinalIssuer action: introduced an action to send signed quotation documents to final issuers.
- Add dealerCanShow and sellerCanShow control on Simulation: introduced controls for dealerCanShow and sellerCanShow on simulations.

## 4.39.0 (21.07.2020)

### Added
- Add archive_email to Issuer, Final issuer, Supplier: introduced an archive_email field for Issuer, Final Issuer, and Supplier models.

## 4.38.0 (16.07.2020)

### Added
- Add Ellegi global variables: introduced global variables for Ellegi.
- Add EllegiSupplierAccountingMailbox: introduced an accounting mailbox for Ellegi suppliers.
- Add notes to DealerAccounting, DealerAccountingEllegiWeek, EllegiSupplierAccounting, EllegiSupplierAccountingPeriod, EllegiSupplierAccountingPeriodData: introduced notes for various Ellegi accounting entities.
- Add EllegiFinalIssuerAccountingPeriod, EllegiFinalIssuerAccountingPeriodData: introduced EllegiFinalIssuerAccountingPeriod and EllegiFinalIssuerAccountingPeriodData entities.
- Add Nova EllegiFinalIssuerAccountingPeriod, Nova EllegiFinalIssuerAccountingPeriodData: integrated corresponding Nova models for EllegiFinalIssuerAccountingPeriod and EllegiFinalIssuerAccountingPeriodData.
- Add EllegiFinalIssuerAccountingPeriod Policy, EllegiFinalIssuerAccountingPeriodData Policy: introduced policies for EllegiFinalIssuerAccountingPeriod and EllegiFinalIssuerAccountingPeriodData.

### Changed
- Update EllegiFinalIssuerAccounting: improved the structure and functionality of EllegiFinalIssuerAccounting.
- Update Nova EllegiFinalIssuerAccounting: improved the structure and functionality of Nova EllegiFinalIssuerAccounting.
- Update globallySearchable for Nova models: updated globally searchable settings for Nova models.

## 4.37.0 (15.07.2020)

### Added
- Add AccountingFortnight, AccountingMonth, AccountingTen, EllegiAdvancesAccount, EllegiAdvancesAccountTransfer, EllegiFinalIssuerAccounting, EllegiSupplierAccounting, EllegiSupplierAccountingPeriod, Months, Tens: introduced multiple accounting entities and periods.
- Add Nova AccountingFortnight, Nova AccountingMonth, Nova AccountingTen, Nova EllegiAdvancesAccount, Nova EllegiAdvancesAccountTransfer, Nova EllegiFinalIssuerAccounting, Nova EllegiSupplierAccounting, Nova EllegiSupplierAccountingPeriod, Nova Months, Nova Tens: integrated corresponding Nova models for the new accounting entities and periods.
- Add EllegiAdvancesAccount Policy, EllegiAdvancesAccountTransfer Policy, EllegiFinalIssuerAccounting Policy, EllegiSupplierAccounting Policy, EllegiSupplierAccountingPeriod Policy, EllegiSupplierAccountingPeriodData Policy, Fortnight Policy, Month Policy, Ten Policy: introduced policies for the new accounting entities and periods.
- Add Days spent collecting to DealerAccountingEllegiWeek: added a field to track days spent collecting for DealerAccountingEllegiWeek.
- Add Remissions collected to DealerAccountingEllegiWeek: introduced a field to track remissions collected for DealerAccountingEllegiWeek.
- Add Ten, Fortnight, Month relationship to Quotation: established relationships between Quotations and Ten, Fortnight, Month entities.
- Add AccountingTen, AccountingFortnight, AccountingMonth relationship to Quotation: established relationships between Quotations and AccountingTen, AccountingFortnight, AccountingMonth entities.
- Add Accounting periods Quotation update to PendingToEmitted and PendingToEmittedPartial: included updates for accounting periods in Quotation transitions to PendingToEmitted and PendingToEmittedPartial.
- Add aka, remission_period to FinalIssuer / Nova FinalIssuer: introduced aka and remission_period fields to FinalIssuer and Nova FinalIssuer.
- Add remission_period to Supplier / Nova Supplier: added remission_period field to Supplier and Nova Supplier.
- Add remission_net_of_commission to FinalIssuer / Nova FinalIssuer: introduced remission_net_of_commission field to FinalIssuer and Nova FinalIssuer.
- Add remission_net_of_commission to Supplier / Nova Supplier: added remission_net_of_commission field to Supplier and Nova Supplier.
- Add administrative_email to FinalIssuer / Nova FinalIssuer: introduced administrative_email field to FinalIssuer and Nova FinalIssuer.
- Add assiclick_cash_collected, assiclick_cash_collected_at, ellegi_cash_collected, ellegi_cash_collected_at to Quotation: added fields to track cash collected and collection dates for Assiclick and Ellegi in Quotations.
- Add QuotationAccounting Card to Nova WorkableQuotationDone: introduced a QuotationAccounting Card for Nova WorkableQuotationDone.
- Add States to EllegiSupplierAccountingPeriodData: added states to EllegiSupplierAccountingPeriodData.

### Changed
- Update Nova sidebar links: revised the sidebar links in Nova for better navigation.
- Update Fortnights: improved the structure and functionality of Fortnights.

## 4.36.0 (02.07.2020)

### Added
- Add order_column to DealerAccounting: introduced an order column to the DealerAccounting model.

### Changed
- DealerAccountingEllegi and DealerAccountingEllegiWeek toThousandsDecimal formatting: updated the formatting to thousands decimal for better readability.

## 4.35.0 (02.07.2020)

### Added
- Add remission_net_of_commission to Dealer: introduced a new field for remission net of commission in the Dealer model.
- Add Enermia WallBox request: added a request feature for Enermia WallBox.

## 4.34.0 (30.06.2020)

### Added
- Add handleHiddenCoverages to DealerClickCalculationEngine: introduced a method to handle hidden coverages in the DealerClickCalculationEngine.

## 4.33.0 (30.06.2020)

### Added
- Add Quotation resource link to Archiving Quotation System: linked the Quotation resource to the Archiving Quotation System.

## 4.32.0 (28.06.2020)

### Added
- Add DealerAccounting: introduced the DealerAccounting model.
- Add DealerAccountingEllegi: introduced the DealerAccountingEllegi model.
- Add DealerAccountingEllegiWeek: introduced the DealerAccountingEllegiWeek model.

### Changed
- Changed AccountingWeek sorting order: updated the sorting order for AccountingWeek.

## 4.31.1 (28.06.2020)

### Fixed
- Fixed public $theme on BookingQuotationDealerMail: resolved an issue with the public theme property on BookingQuotationDealerMail.
- Fixed public $theme on DealerWeeklyAccountingClosingsDocumentsDealerMail: resolved an issue with the public theme property on DealerWeeklyAccountingClosingsDocumentsDealerMail.
- Fixed ClosedToOpenedOverdue on Simulations states: resolved an issue with the ClosedToOpenedOverdue state transition on Simulations.

## 4.31.0 (27.06.2020)

### Added
- Add closed and closed_at to AccountingWeek: introduced closed and closed_at fields to AccountingWeek.
- Add auto set closed attributes to AccountingWeek: added functionality to automatically set closed attributes for AccountingWeek.

## 4.30.0 (27.06.2020)

### Added
- Add Nova models observers to handle GoogleSheetAccounting: introduced observers for Nova models to handle GoogleSheetAccounting.
- Add SetProductCoveragesIssuerCommissions to ProductCoverage: added a method to set issuer commissions for ProductCoverage.
- Add issuer_commissions to QuotationResourceByProduct: introduced issuer commissions to QuotationResourceByProduct.

### Changed
- Changed systemCommissionsConfirmed calculation on QuotationCoverageObserver: updated the calculation for systemCommissionsConfirmed in QuotationCoverageObserver.

## 4.29.0 (17.06.2020)

### Added
- Add edit on AccountingWeek: introduced an edit feature for AccountingWeek.

## 4.28.0 (17.06.2020)

### Added
- Add SendSignedPoliciesToIssuersMail: introduced a mail feature to send signed policies to issuers.
- Add Catch Incoming Emails System: added a system to catch incoming emails.

### Changed
- Action traits refactoring: improved the structure and organization of action traits.
- Emission System Slack Notifications content refactoring: updated the content of Slack notifications for the Emission System.

## 4.27.0 (16.06.2020)

### Added
- Add QuotationChangeSeller to WorkableQuotationDone Actions: introduced a QuotationChangeSeller action to WorkableQuotationDone.
- Add AccountingWeeks: introduced the AccountingWeeks feature.

### Fixed
- Fixed missing transition CalculatedOverdueToCalculatedOverdue: resolved an issue with the missing transition for CalculatedOverdueToCalculatedOverdue.

## 4.26.0 (16.06.2020)

### Added
- Add Change Seller Action to Quotations: introduced a Change Seller action for quotations.

## 4.25.0 (15.06.2020)

### Added
- Add canSeeIbar() and cannotSeeIbar() to Seller: introduced canSeeIbar() and cannotSeeIbar() methods to the Seller model.

## 4.24.0 (15.06.2020)

### Added
- Add return_signed_policy_pdf to Product: introduced a feature to return signed policy PDFs for products.
- Add mail to issuers with signed policies: added functionality to send emails to issuers with signed policies.

### Changed
- Quotation refactoring: improved the structure and efficiency of the quotation system.

## 4.23.0 (14.06.2020)

### Added
- Add Archiving Quotation System: introduced a system for archiving quotations.

## 4.22.0 (12.06.2020)

### Added
- Add updateArchivingData to transitions to Emitted and EmittedPartial: introduced updateArchivingData transitions for Emitted and EmittedPartial states.

## 4.21.0 (11.06.2020)

### Added
- Add NewsIlsole24oreMotori to News Feeds: introduced a news feed for Ilsole24ore Motori.
- Add NewsCorriereMotori to News Feeds: introduced a news feed for Corriere Motori.
- Add NewsMotoriitMotori to News Feeds: introduced a news feed for Motori.it Motori.

## 4.20.0 (11.06.2020)

### Added
- Add News Feeds on Nova main Dashboard: introduced news feeds on the Nova main dashboard.
- Add NewsAnsaMotori to News Feeds: introduced a news feed for Ansa Motori.

## 4.19.0 (11.06.2020)

### Added
- Add customer_signature_mandatory to Product: introduced a mandatory customer signature requirement for products.
- Add dealer_signature_mandatory to Product: introduced a mandatory dealer signature requirement for products.

### Changed
- Quotation changes for oncoming Archiving Quotation System: updated quotations in preparation for the Archiving Quotation System.

## 4.18.0 (11.06.2020)

### Added
- Add Viewer Base Role: introduced a base role for viewers.

## 4.17.0 (11.06.2020)

### Changed
- Quotation changes for oncoming Archiving Quotation System: updated quotations in preparation for the Archiving Quotation System.

## 4.16.0 (11.06.2020)

### Changed
- Update sidebar links: revised the sidebar links for better navigation.

### Fixed
- Fixed Changelog viewer: resolved an issue with the changelog viewer.

## 4.15.0 (10.06.2020)

### Added
- Add Archivist Role: introduced a role for archivists.

### Changed
- Policy refactoring: improved the structure and efficiency of the policy system.
- Quotation changes for oncoming Archiving Quotation System: updated quotations in preparation for the Archiving Quotation System.

## 4.14.0 (09.06.2020)

### Added
- Add Nova resource ordering: introduced a feature for ordering Nova resources.

## 4.13.0 (09.06.2020)

### Added
- Add is_real to Simulations: introduced a field to indicate if simulations are real.

### Changed
- General refactoring: improved the overall structure and maintainability of the codebase.

## 4.12.0 (03.06.2020)

- Technical release for versioning: release focusing on versioning updates.

## 4.11.0 (03.06.2020)

### Added
- Add setQuotationsSnapshotData to DealerClickCalculationEngine: introduced a method to set snapshot data for quotations in the DealerClickCalculationEngine.

## 4.10.0 (01.06.2020)

- Technical release for versioning: release focusing on versioning updates.

## 4.9.0 (01.06.2020)

### Changed
- Update DealersWithCommissionsData lens: revised the DealersWithCommissionsData lens.

## 4.8.0 (28.05.2020)

### Added
- Add convertIso8601ToDmyHi helper: introduced a helper to convert ISO8601 dates to DMY HI format.

## 4.7.0 (27.05.2020)

### Added
- Add notes to Customer, Vehicle and Quotation: introduced notes for Customer, Vehicle, and Quotation entities.

## 4.6.0 (26.05.2020)

### Added
- Add workableQuotationDoneMetricsCards: introduced metrics cards for workable quotations.

## 4.5.0 (26.05.2020)

### Changed
- General refactoring: improved the overall structure and maintainability of the codebase.

## 4.4.0 (25.05.2020)

- Technical release for versioning: release focusing on versioning updates.

## 4.3.0 (21.05.2020)

### Added
- Add Enermia Products: introduced Enermia products.

## 4.2.0 (18.05.2020)

### Changed
- General refactoring: improved the overall structure and maintainability of the codebase.

## 4.1.0 (22.04.2020)

- Version update: release focusing on versioning updates.

## 4.0.0 (14.12.2019)

### Added
- Add Quotation PDF request creation and sending mails system: introduced a system for creating and sending Quotation PDF requests.
- Add internal_id to Quotation: introduced an internal ID for quotations.
- Add Issuer to QuotationCoverage: added an issuer field to QuotationCoverage.
- Add Product Documents Attributes to QuotationCoverage: introduced document attributes for products in QuotationCoverage.
- Add Documents Types to Product: added document types to products.

### Changed
- General refactoring: improved the overall structure and maintainability of the codebase.

## 3.18.2 (06.12.2019)

### Changed
- Coverages update: revised coverage details.

## 3.18.1 (11.11.2019)

### Changed
- Coverages update: revised coverage details.

## 3.18.0 (08.11.2019)

### Added
- Add ProductCoverage: introduced the ProductCoverage feature.

### Changed
- Admin menu refactor: improved the structure and organization of the admin menu.

## 3.17.0 (05.11.2019)

### Added
- Add Region: introduced the Region entity.
- Add Province: introduced the Province entity.
- Add City: introduced the City entity.
- Add Country: introduced the Country entity.
- Add saintsystems/nova-resource-group-menu: integrated the saintsystems/nova-resource-group-menu package.

## 3.16.0 (30.10.2019)

### Added
- Add Dealer Product relation: introduced a relationship between dealers and products.

## 3.15.2 (30.10.2019)

### Fixed
- Fixed emission_disclosure_document: resolved an issue with the emission disclosure document.

## 3.15.1 (30.10.2019)

### Changed
- documentDisclosure as int not boolean: updated the documentDisclosure field to be an integer instead of a boolean.

## 3.15.0 (30.10.2019)

### Added
- Add Issuer: introduced the Issuer entity.
- Add Product: introduced the Product entity.

## 3.14.2 (29.10.2019)

### Changed
- Removed updateAssiclickVariablePrices: eliminated the updateAssiclickVariablePrices functionality.

## 3.14.1 (28.10.2019)

### Added
- Add isCoverageToInclude: introduced the isCoverageToInclude feature.

## 3.14.0 (28.10.2019)

### Added
- Add updateAssiclickVariablePrices: introduced a feature to update Assiclick variable prices.

## 3.13.1 (26.10.2019)

### Fixed
- Fixed Google Documents Paths: resolved an issue with the paths for Google Documents.

## 3.13.0 (22.10.2019)

### Added
- Add Dealer Actions: introduced new actions for dealers.

## 3.12.0 (22.10.2019)

- Technical release for versioning: release focusing on versioning updates.

## 3.11.1 (21.10.2019)

### Added
- Add Infodrive Satellitare: introduced the Infodrive Satellitare feature.

## 3.11.0 (19.10.2019)

### Changed
- Update Laravel to 6.0: upgraded Laravel to version 6.0.

## 3.10.2 (16.10.2019)

### Changed
- Removed DealerManagementCosts from Seller Commissions: eliminated DealerManagementCosts from seller commissions.

## 3.10.1 (16.10.2019)

### Changed
- Removed Seller Management Costs from prices.js: eliminated seller management costs from prices.js.
- Add Dealer Management Costs to prices.js: introduced dealer management costs to prices.js.

## 3.10.0 (16.10.2019)

### Added
- Add Extra SCAR Commissions to Dealers and Sellers: introduced extra SCAR commissions for dealers and sellers.

## 3.9.1 (16.10.2019)

### Fixed
- coverages_descriptions: resolved an issue with coverage descriptions.

### Added
- Add TUA Ellegi MAB id: introduced a TUA Ellegi MAB ID.

## 3.9.0 (14.10.2019)

### Added
- Add Vehicle Average Purchase Price Metrics: introduced metrics for the average purchase price of vehicles.
- Add nullable for assiclick_quotation_profile and assiclick_discount_profile: added nullable fields for assiclick quotation and discount profiles.

## 3.8.0 (14.10.2019)

### Added
- Add SellersUser Policy: introduced a policy for SellersUser.
- Add VehiclesBrand Metrics: introduced metrics for vehicle brands.

### Changed
- Update User Notification: revised the user notification system.
- Update Seller Policy: updated the policy for sellers.
- Update Dealer Policy: updated the policy for dealers.
- Update User edit Policy: revised the policy for editing users.
- Update VehiclesAlarmType Policy: updated the policy for vehicle alarm types.

## 3.7.1 (14.10.2019)

### Fixed
- Fixed Assiclick admin login: resolved an issue with the Assiclick admin login.

## 3.7.0 (13.10.2019)

### Changed
- Update Vehicle Policy: revised the policy for vehicles.

## 3.6.0 (13.10.2019)

### Added
- Add Dealer Resource Detail Metrics: introduced metrics for dealer resource details.
- Add Seller Lenses: introduced lenses for sellers.
- Add Dealers Filter: introduced a filter for dealers.

## 3.5.0 (13.10.2019)

### Added
- Add Dealer Lenses: introduced lenses for dealers.

## 3.4.0 (12.10.2019)

### Added
- Add Dealer wip_status: introduced a WIP status for dealers.

## 3.3.0 (11.10.2019)

### Added
- Add mail template attachments: introduced attachments for mail templates.

## 3.2.2 (11.10.2019)

### Fixed
- Fixed mail string: resolved an issue with the mail string.

## 3.2.1 (11.10.2019)

### Fixed
- Return empty for dealers without sellers: resolved an issue where dealers without sellers were returning non-empty results.

## 3.2.0 (11.10.2019)

### Added
- Add Dealer administrative & training email: introduced an administrative and training email feature for dealers.

## 3.1.0 (11.10.2019)

### Added
- Add ResourcesSummary Card: introduced a resources summary card.
- Add SellersUserBySeller Filter: introduced a filter for SellersUser by seller.
- Add withTrashed for DealersUser and SellersUser importers: added withTrashed support for DealersUser and SellersUser importers.

## 3.0.0 (10.10.2019)

### Added
- Add Seller: introduced the Seller entity.

## 2.26.0 (09.10.2019)

### Fixed
- Run php artisan nova:publish: resolved an issue by running the php artisan nova:publish command.

## 2.25.0 (08.10.2019)

### Changed
- Add $assiclickCompanyScarIncresePercentage = 0 for MAB V7: introduced a zero percentage increase for Assiclick Company SCAR for MAB V7.

## 2.24.4 (08.10.2019)

### Fixed
- Add Dealer to handleAssiclickSimulationSession for sending documents methods: resolved an issue with sending documents in the AssiclickSimulationSession.

## 2.24.3 (08.10.2019)

### Fixed
- Update medialibrary.php: resolved an issue with the medialibrary.php file.

## 2.24.2 (08.10.2019)

### Fixed
- Fixed SCAR value for dealers without variable SCAR: resolved an issue with SCAR values for dealers without variable SCAR.
- $brokerData['shortName'] instead of $brokerData['name'] for admin menu: updated admin menu to use shortName instead of name.

## 2.24.1 (08.10.2019)

### Changed
- Collect data from not active Dealers: updated data collection to include inactive dealers.

## 2.24.0 (08.10.2019)

### Changed
- Using Dealer data instead of Assiclick Brokers data for admin menu: switched to using Dealer data for the admin menu.

## 2.23.2 (08.10.2019)

### Fixed
- Add originalPrices to handleQuotationsSessionData: resolved an issue with handling original prices in quotations session data.

## 2.23.1 (08.10.2019)

### Fixed
- Using taxId instead of taxCode from request: updated to use taxId instead of taxCode from requests.
- Add Dealer to handleAssiclickPolicySessionAllButDealerClick: added Dealer support to handleAssiclickPolicySessionAllButDealerClick.

## 2.23.0 (08.10.2019)

### Added
- Assiclick Companies Extra-Scar handler: introduced a handler for extra-SCAR in Assiclick Companies.

### Changed
- Price JS refactoring: improved the structure of the price JavaScript.
- General refactoring: overall improvements to the codebase.

## 2.22.0 (04.10.2019)

### Fixed
- Serialization on queued actions with canSee bug fixed: resolved an issue with serialization on queued actions involving canSee.

## 2.21.0 (02.10.2019)

### Added
- Add Vehicles: introduced the Vehicles entity.

## 2.20.0 (01.10.2019)

### Added
- Add Customers per dealer metric: introduced a metric for customers per dealer.

## 2.19.0 (01.10.2019)

### Added
- Add Nova Backup: introduced a backup feature for Nova.
- Add Backup system: implemented a new backup system.

## 2.18.3 (01.10.2019)

### Added
- Add email to bidder request: introduced an email field for bidder requests.

## 2.18.2 (01.10.2019)

### Changed
- Add ->withTrashed() for Dealer: introduced withTrashed support for dealers.

## 2.18.1 (01.10.2019)

### Changed
- mb_strtoupper instead of strtoupper: updated to use mb_strtoupper for better character handling.

## 2.18.0 (01.10.2019)

### Changed
- Uppercase for Customer names and address: enforced uppercase formatting for customer names and addresses.

## 2.17.0 (01.10.2019)

### Added
- Add Disclosures and Engagement letters Documents: introduced disclosure and engagement letter documents.
- Add address to Customer and Assiclick importer: introduced address fields for customer and Assiclick importers.

### Changed
- Using Customer data from DealerClick instead of Assiclick for Policies and Booked Simulations: updated to use customer data from DealerClick.

## 2.16.0 (30.09.2019)

### Added
- Add base Customer: introduced a base customer model.

## 2.15.1 (27.09.2019)

### Fixed
- Individual data for policies: resolved issues with individual data for policies.

## 2.15.0 (27.09.2019)

### Added
- "Valore a nuovo 24 mesi" for ELLEGI TUA: introduced "Valore a nuovo 24 mesi" for ELLEGI TUA.
- Add customer legal form: introduced a legal form field for customers.
- Add Belfiore data to customer: introduced Belfiore data fields for customers.

### Changed
- Now using DealerClick email addresses taken from settings: updated to use email addresses from DealerClick settings.

## 2.14.2 (27.09.2019)

### Added
- Add start_today_end_40 to pickdate: introduced a pickdate option for start_today_end_40.

### Changed
- Limit vehicle delivery date to 40 days: enforced a 40-day limit for vehicle delivery dates.

## 2.14.1 (27.09.2019)

### Fixed
- Add taxCodeValidate to SavedSnapshot show: resolved an issue with tax code validation in SavedSnapshot show.

## 2.14.0 (26.09.2019)

### Added
- Add TaxCode validation: introduced validation for tax codes.
- Add Espresso Belfiore models: introduced Belfiore models for Espresso.
- Add EspressoTaxCode: introduced EspressoTaxCode.

### Changed
- Espresso models refactoring: improved the structure and maintainability of Espresso models.

## 2.13.0 (23.09.2019)

### Added
- Crud for Espresso companies: introduced CRUD functionality for Espresso companies.
- Add Supplier: introduced a supplier model.

## 2.12.0 (21.09.2019)

### Added
- Create EspressoAddress helper: introduced a helper for EspressoAddress.
- Update permissions on Dealer actions: revised permissions for dealer actions.
- Add AssiclickSupplier: introduced an AssiclickSupplier model.
- WIP on ProductsRate: ongoing work on ProductsRate.

### Changed
- Removed useless packages: eliminated unnecessary packages.

## 2.11.2 (21.09.2019)

### Added
- Add FATTURA_ELLEGI: introduced FATTURA_ELLEGI.

## 2.11.1 (19.09.2019)

### Fixed
- Fixed password_confirmation: resolved an issue with password confirmation.

## 2.11.0 (19.09.2019)

### Added
- Add User notifications: introduced user notifications.

## 2.10.2 (19.09.2019)

### Fixed
- Fixed V3 mandatory: resolved an issue with mandatory settings for V3.

## 2.10.1 (18.09.2019)

### Fixed
- Fixed V3a V3b mandatory coverages: resolved an issue with mandatory coverages for V3a and V3b.

## 2.10.0 (18.09.9)

### Added
- Base Roles and Permissions: introduced a base system for roles and permissions.

## 2.9.3 (18.09.2019)

### Fixed
- Add Emission email required: resolved an issue with required emission emails.

## 2.9.2 (18.09.2019)

### Fixed
- Dealers users can_buy and is_admin Added from to sessions: resolved issues with can_buy and is_admin fields for dealer users in sessions.

## 2.9.1 (17.09.2019)

### Fixed
- Set techouse/intl-date-time 1.3.* to handle a bug on new version: resolved an issue by setting techouse/intl-date-time to version 1.3.*.

## 2.9.0 (17.09.2019)

### Changed
- Nova Mail using Assiclick Fork for localization: switched to using the Assiclick fork for Nova Mail localization.

## 2.8.0 (17.09.2019)

### Added
- Add Action events: introduced action events.

## 2.7.0 (17.09.2019)

### Added
- TextCopy for Dealers users username and password: introduced TextCopy functionality for dealer users' usernames and passwords.
- Mail from admin to Dealers and Dealers users: added mail functionality from admin to dealers and dealer users.

## 2.6.1 (17.09.2019)

### Fixed
- Fixed accessFrom accessTo null on import: resolved an issue where accessFrom and accessTo fields were null during import.

## 2.6.0 (17.09.2019)

### Added
- Assiclick Users Importer: introduced a new tool for importing Assiclick users.
- Assiclick Importers Tool: added a comprehensive tool for Assiclick imports.
- Dealers users: added support for dealer users.
- Admin sidebar groups refactoring: improved the organization of the admin sidebar groups.

## 2.5.1 (16.09.2019)

### Fixed
- Front end admin access bugfix: resolved an issue with admin access on the front end.

## 2.5.0 (15.09.2019)

### Added
- User Avatar: introduced support for user avatars.
- Dealer Address: added fields for dealer addresses.
- Importer Model to handle Assiclick imports: new model to manage Assiclick imports.
- Dealer Assiclick sync on CRUD actions: implemented synchronization for Assiclick on CRUD actions for dealers.

## 2.4.0 (15.09.2019)

- Technical release for versioning: release focusing on versioning updates.

## 2.3.3 (13.09.2019)

### Changed
- App Cache Busting Hash and Version: updated app cache busting mechanism with hash and versioning.

## 2.3.2 (13.09.2019)

- Technical release for versioning: release focusing on versioning updates.

## 2.3.1 (13.09.2019)

### Fixed
- Fixed Veh Added icles select using assiclick.simulation.vehicle.brandInfocarCode instead of assiclick.simulation.vehicle.brandId: resolved an issue with vehicle selection.

## 2.3.0 (12.09.2019)

### Added
- Add VehiclesBrand: introduced a new feature for managing vehicle brands.
- Add InfocarBrandImport: added functionality for importing Infocar brands.
- Add Available Vehicles Brands to Dealers: made vehicle brands available to dealers.
- Add Amazon S3 in filesystem: integrated Amazon S3 into the filesystem.
- Add importBrandsLogo from Quattroruote website: introduced functionality to import brand logos from Quattroruote website.
- Add AttachAutoAndOffroadBrandsToDealers action: added an action to attach auto and offroad brands to dealers.

### Changed
- Dealer admin page sections GUI refactoring: improved the GUI of the dealer admin page sections.
- Admin sidebar GUI refactoring: enhanced the GUI of the admin sidebar.
- All vehicles brands use thumbnail image on S3: updated vehicle brands to use thumbnail images stored on S3.
- Vehicles brands dropdown refactoring using Vehicles Added Brand and thumbnail image on S3: improved the dropdown for vehicle brands using added brands and S3 thumbnail images.

## 2.2.2 (11.09.2019)

### Changed
- Remove Duration. Need a bugfix: removed the duration field pending a bugfix.

## 2.2.1 (11.09.2019)

### Fixed
- Contract duration view: resolved an issue with the contract duration view.

## 2.2.0 (11.09.2019)

### Added
- Dealer Available Alarm Types: introduced new alarm types available to dealers.
- Dealer mandatory coverages: added mandatory coverages for dealers.
- Dealer salable coverages: introduced coverages that can be sold by dealers.
- Dealer Starting coverages: added initial coverages for dealers.
- Vehicle alarm types: introduced new alarm types for vehicles.
- Weeks: added support for weekly scheduling.
- Import all fields from Assiclick Broker into Dealer: implemented import functionality for all fields from Assiclick Broker into Dealer.
- Dynamic coverages checkboxes generation on front end sidebar: added dynamic generation of coverage checkboxes on the front end sidebar.

### Changed
- AssiclickLoginController get partial data from DealerClick instead of Assiclick: updated the data retrieval process in AssiclickLoginController.
- TUA Piacenza coverages string: add Cristalli inside Atti Vandalici: updated TUA Piacenza coverages string to include Cristalli within Atti Vandalici.
- INFODRIVE 2 coverages string: updated the coverages string for INFODRIVE 2.
- Changelog refactoring: improved the structure and clarity of the changelog.

## 2.1.0 (09.09.2019)

### Changed
- Tool for changelog: updated the tool used for generating the changelog.

## 2.0.2 (09.09.2019)

### Changed
- bump-version.sh: revised the bump-version.sh script.

## 2.0.1 (09.09.2019)

### Fixed
- Fixed number bug for decimals in assiclick commissions: resolved an issue with decimal numbers in Assiclick commissions.

## 2.0.0 (09.09.2019)

### Added
- Super admin backend: introduced a backend for super admins.
- Add settings: added a settings feature.
- Add Changelog view: introduced a view for the changelog.

### Changed
- Shell versioning update: improved the shell versioning process.

## 1.8.2 (03.09.2019)

### Added
- Add startingVehicle to agentNumber: introduced startingVehicle for agent numbers.
- Add startingDuration for agentNumber: introduced startingDuration for agent numbers.

### Changed
- Update rates.php: revised the rates.php file.

## 1.8.1 (02.09.2019)

### Fixed
- Tooltip bug fix: resolved an issue with tooltips.

## 1.8.0 (02.09.2019)

### Added
- Add startingCoverages for agentNumber: introduced starting coverages for agent numbers.

## 1.7.3 (29.08.2019)

### Changed
- Update coverages.php: revised the coverages.php file.

## 1.7.2 (27.08.2019)

### Fixed
- Admin home page address bugfix: resolved an issue with the address on the admin home page.

## 1.7.1 (27.08.2019)

### Fixed
- Bugfix on admin stats views: resolved an issue with the admin stats views.

## 1.7.0 (27.08.2019)

### Added
- Add stats for admin: introduced new statistical features for admin users.

## 1.6.0 (27.08.2019)

### Added
- Add basic stats to dealerAdmin home page: introduced basic statistical features on the dealerAdmin home page.

## 1.5.0 (27.08.2019)

### Added
- Add superadmin for policies: introduced a superadmin role for managing policies.
- Admin section: added a new section for admin users.
- Admin stats: introduced new statistical features for admin users.
- Add laravel-db-snapshots: integrated the laravel-db-snapshots package.
- Handle mocked documents for simulations: added functionality to handle mocked documents in simulations.
- MAB requests: introduced MAB request handling.

### Changed
- Code refactoring: improved the structure and readability of the code.
- GUI refactoring: enhanced the graphical user interface.

### Fixed
- Different companyIdsfordevelopandproduction bugfix: resolved an issue with different company IDs for development and production environments.
- EffectDate on bidderPDF bugfix: resolved an issue with the effect date on bidder PDF.

## 1.4.3 (25.06.2019)

### Added
- Bidder email and order request: introduced bidder email notifications and order requests.

## 1.4.2 (20.06.2019)

### Fixed
- V5 check and uncheck bug fixed: resolved an issue with the V5 check and uncheck functionality.

## 1.4.1 (20.06.2019)

### Added
- Add PENTANET rates: introduced new rates for PENTANET.
- Add stats generator: added a generator for statistical data.
- Limit view for subBrokers: restricted views for subBrokers.

### Changed
- Update coverages.php: revised the coverages.php file.
- Update prices.blade.php: revised the prices.blade.php file.

### Fixed
- Broker commission bug fixed: resolved an issue with broker commissions.

## 1.4.0 (28.05.2019)

### Added
- Add links to edit simulations on mobile: introduced links for editing simulations on mobile devices.

## 1.3.0 (27.05.2019)

### Added
- Add summary modal to emission request: introduced a summary modal for emission requests.
- Add CSS and JS versioning: implemented versioning for CSS and JS files.

## 1.2.0 (27.05.2019)

### Added
- Add Proposte and Prenotazioni: introduced new features for Proposte and Prenotazioni.

## 1.1.2 (23.04.2019)

- Technical release: non-functional technical updates.

## 1.1.1 (23.04.2019)

### Added
- Added Add and version name to booking request: included add and version name in booking requests.

### Fixed
- Lev Ins V6 coverage bug fix: resolved an issue with Lev Ins V6 coverage.

## 1.1.0 (17.04.2019)

- The right one: corrected release updates.

## 1.0.0 (17.04.2019)

- First release: initial release of the application.

## 0.1.0 (02.04.2019)

- Let's start: beginning of the project.

