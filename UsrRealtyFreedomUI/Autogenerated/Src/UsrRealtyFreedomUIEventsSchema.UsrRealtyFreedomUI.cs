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
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,83,40,206,207,77,85,112,86,86,72,206,79,73,85,40,207,204,201,81,72,74,85,200,72,45,74,213,3,2,5,77,77,0,140,226,0,53,33,0,0,0 };
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

