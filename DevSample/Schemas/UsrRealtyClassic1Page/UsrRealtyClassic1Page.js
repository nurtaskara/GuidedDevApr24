define("UsrRealtyClassic1Page", ["ServiceHelper"], function(ServiceHelper) {
	return {
		entitySchemaName: "UsrRealtyClassic",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrRealtyClassicFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrRealtyClassic"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			onMyButtonClick: function(){
				this.console.log("Button works!");
			},
			onRunWebServiceButtonClick: function() {
				var typeObject = this.get("UsrType");
				if (!typeObject) {
					return;
				}
				var typeId = typeObject.value;
				var offerTypeObject = this.get("UsrOfferType");
				if (!offerTypeObject) {
					return;
				}
				var offerTypeId = offerTypeObject.value;
				var params = {
					realtyTypeId: typeId,
					realtyOfferTypeId: offerTypeId,
					entityName: "UsrRealtyClassic"
				};				
				this.console.log("1");
				ServiceHelper.callService("RealtyService", "GetMaxPriceByTypeId", this.getWebServiceResult, params, this);
				this.console.log("2");
			},
			getWebServiceResult: function(response, success) {
				this.console.log("3");
				this.Terrasoft.showInformation("Max price: " + response.GetMaxPriceByTypeIdResult + ", success: " + success);
			}
        },
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrName967688f4-d77c-45e2-bc49-2f54c34e57f3",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrName",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FLOAT459f49ac-2c77-42af-a31a-d75d44808fd2",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrPriceUSD",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FLOAT2b442d6a-cf2a-4048-b668-7af0e4cbd9c4",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrArea",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
	          {
                /*  Run the operation that inserts the element to the page. */
               "operation": "insert",
               "parentName": "ProfileContainer",
               "propertyName": "items",
               "name": "MyButton",
               "values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
                  "itemType": Terrasoft.ViewItemType.BUTTON,
                  "caption": {bindTo: "Resources.Strings.MyButtonCaption"},
                    /* Bind the button click handler method. */
                    "click": {bindTo: "onMyButtonClick"},
                    /* The display style of the button. */
                    "style": Terrasoft.controls.ButtonEnums.style.BLUE
                }
            },
            {
                /*  Run the operation that inserts the element to the page. */
               "operation": "insert",
               "parentName": "ProfileContainer",
               "propertyName": "items",
               "name": "RunWebServiceButton",
               "values": {
					"layout": {
						"colSpan": 14,
						"rowSpan": 1,
						"column": 10,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
                  "itemType": Terrasoft.ViewItemType.BUTTON,
                  "caption": {bindTo: "Resources.Strings.RunWebServiceButtonCaption"},
                    /* Bind the button click handler method. */
                    "click": {bindTo: "onRunWebServiceButtonClick"},
                    /* The display style of the button. */
                    "style": Terrasoft.controls.ButtonEnums.style.RED
                }
            },
  
			{
				"operation": "insert",
				"name": "LOOKUP80d222ab-9064-4091-b114-a9607c004c42",
				"values": {
					"layout": {
						"colSpan": 14,
						"rowSpan": 1,
						"column": 10,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP0162fdee-9526-4b6f-a602-814177698fb6",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrOfferType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRING6f939624-0c53-4b54-90f8-425a3ff52c7b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 2,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrComment",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "UsrNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 1
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
