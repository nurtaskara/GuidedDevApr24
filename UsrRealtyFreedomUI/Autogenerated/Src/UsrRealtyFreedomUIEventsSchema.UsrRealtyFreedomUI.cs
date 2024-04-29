namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyFreedomUIEventsSchema

	/// <exclude/>
	public class UsrRealtyFreedomUIEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyFreedomUIEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyFreedomUIEventsSchema(UsrRealtyFreedomUIEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("f1483e21-bf5b-4cf0-9487-bffa5c1c8e6d");
			Name = "UsrRealtyFreedomUIEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("46605842-f9d8-4fb3-873c-5340c1b63300");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,77,107,27,49,16,189,7,242,31,134,37,135,93,48,34,185,38,109,32,118,157,96,8,105,201,174,123,41,61,200,218,241,70,69,31,139,164,117,234,150,252,247,142,86,235,198,89,59,144,185,72,26,189,121,51,239,49,134,107,244,45,23,8,21,58,199,189,93,7,54,179,102,45,155,206,241,32,173,57,61,249,123,122,2,20,157,151,166,129,114,235,3,234,171,253,212,126,161,214,214,188,251,233,144,205,77,144,65,162,255,8,134,205,55,104,194,14,250,163,79,111,251,220,189,164,33,12,186,188,20,79,168,249,3,105,128,207,144,45,189,123,68,174,194,246,214,33,214,86,47,23,89,241,51,85,183,221,74,73,1,66,113,239,33,129,142,240,193,37,76,185,199,35,63,137,101,112,98,143,208,110,104,118,89,35,108,172,172,225,171,41,249,134,20,229,118,245,11,69,0,143,166,70,55,129,68,56,197,53,201,235,105,111,92,227,1,139,87,186,61,230,24,43,154,130,253,103,219,209,96,113,245,22,150,120,193,245,122,200,129,60,37,138,84,48,2,215,40,164,230,10,90,39,69,180,43,85,177,59,12,213,182,197,122,102,85,167,205,119,174,58,252,52,64,175,243,104,233,183,136,95,150,95,178,113,119,185,134,60,145,93,195,197,249,46,138,183,160,145,176,24,200,22,126,198,141,64,133,53,205,17,92,135,196,124,136,243,193,197,237,160,253,244,188,193,10,117,171,120,136,147,27,124,134,123,43,184,146,127,248,74,97,217,227,242,65,207,210,163,163,5,54,228,63,109,47,123,68,111,59,39,8,100,29,177,76,14,219,196,56,178,58,105,249,178,9,100,7,173,60,235,109,90,248,202,218,169,108,210,43,43,88,101,135,81,138,15,232,33,29,41,193,110,173,211,60,228,35,157,212,248,130,157,79,207,14,108,143,17,158,156,125,238,125,152,255,22,216,70,165,187,250,49,252,229,245,57,92,233,120,249,7,52,98,240,200,247,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("9d00e509-ab56-d641-4936-a80acd00282c"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("46605842-f9d8-4fb3-873c-5340c1b63300"),
				CreatedInSchemaUId = new Guid("f1483e21-bf5b-4cf0-9487-bffa5c1c8e6d"),
				ModifiedInSchemaUId = new Guid("f1483e21-bf5b-4cf0-9487-bffa5c1c8e6d")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("f1483e21-bf5b-4cf0-9487-bffa5c1c8e6d"));
		}

		#endregion

	}

	#endregion

}

